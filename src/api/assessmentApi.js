const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

/**
 * Helper to retrieve current auth headers for a specific email or active user
 */
function getAuthHeaders(overrideEmail = null) {
  const token = localStorage.getItem('skillonik_token') || sessionStorage.getItem('skillonik_token') || localStorage.getItem('token');
  const userStr = localStorage.getItem('skillonik_user') || sessionStorage.getItem('skillonik_user') || localStorage.getItem('user');
  let userEmail = overrideEmail || '';

  if (!userEmail && userStr) {
    try {
      const parsedUser = typeof userStr === 'string' ? JSON.parse(userStr) : userStr;
      userEmail = parsedUser.email || parsedUser.user_email || '';
    } catch {
      userEmail = typeof userStr === 'string' && userStr.includes('@') ? userStr : '';
    }
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  if (userEmail) {
    headers['X-User-Email'] = userEmail.trim().toLowerCase();
  }

  return { headers, userEmail: userEmail.trim().toLowerCase() };
}

/**
 * Fetch all completed assessments for a user directly from MongoDB
 */
export async function fetchUserAssessments(email = null, domain = null) {
  const { headers, userEmail } = getAuthHeaders(email);
  const targetEmail = (email || userEmail || '').trim().toLowerCase();

  const queryParams = new URLSearchParams();
  if (targetEmail) queryParams.append('email', targetEmail);
  if (domain) queryParams.append('domain', domain);

  const endpoints = [
    `/api/assessments`,
    `${API_URL}/api/assessments`,
    'http://127.0.0.1:8000/api/assessments',
    'http://localhost:8000/api/assessments'
  ];

  for (const base of [...new Set(endpoints)]) {
    try {
      const url = `${base}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        return data.assessments || [];
      }
    } catch (err) {
      // Continue to next endpoint
    }
  }

  return [];
}

/**
 * Fetch the latest assessment for a specific domain directly from MongoDB
 */
export async function fetchLatestAssessment(domain, email = null) {
  const { headers, userEmail } = getAuthHeaders(email);
  const targetEmail = (email || userEmail || '').trim().toLowerCase();

  const endpoints = [
    `/api/assessments/latest/${encodeURIComponent(domain)}`,
    `${API_URL}/api/assessments/latest/${encodeURIComponent(domain)}`,
    `http://127.0.0.1:8000/api/assessments/latest/${encodeURIComponent(domain)}`,
    `http://localhost:8000/api/assessments/latest/${encodeURIComponent(domain)}`
  ];

  for (const base of [...new Set(endpoints)]) {
    try {
      const url = `${base}${targetEmail ? `?email=${encodeURIComponent(targetEmail)}` : ''}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.attended) {
          return {
            attended: true,
            latest: data.latest
          };
        }
        return {
          attended: false,
          latest: null
        };
      }
    } catch (err) {
      // Try next endpoint
    }
  }

  return {
    attended: false,
    latest: null
  };
}

/**
 * Save / Record assessment result directly to MongoDB database
 */
export async function saveAssessmentResult(resultData, email = null) {
  const { headers, userEmail } = getAuthHeaders(email);
  const targetEmail = (email || userEmail || resultData.user_email || 'guest@skillonik.internal').trim().toLowerCase();

  const payload = {
    domain: String(resultData.domain || '').trim().toLowerCase(),
    domainName: String(resultData.domainName || resultData.domain || 'Domain'),
    level: String(resultData.level || 'beginner').trim().toLowerCase(),
    score: Number(resultData.score || 0),
    totalQuestions: Number(resultData.totalQuestions || 10),
    accuracy: Number(resultData.accuracy || 0),
    durationSeconds: Number(resultData.durationSeconds || 0),
    answers: resultData.answers || {},
    user_email: targetEmail,
    user_name: String(resultData.user_name || 'Candidate'),
    completedAt: resultData.completedAt || undefined
  };

  const reqHeaders = {
    'Content-Type': 'application/json',
  };
  if (headers['Authorization']) {
    reqHeaders['Authorization'] = headers['Authorization'];
  }
  if (targetEmail) {
    reqHeaders['X-User-Email'] = targetEmail;
  }

  // Direct MongoDB Storage via FastAPI
  const endpoints = [
    `/api/assessments`,
    `${API_URL}/api/assessments`,
    'http://127.0.0.1:8000/api/assessments',
    'http://localhost:8000/api/assessments'
  ];

  let lastError = null;
  for (const endpoint of [...new Set(endpoints)]) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: reqHeaders,
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`[MongoDB Direct Write] Assessment successfully saved to MongoDB via ${endpoint}:`, data);
        return data;
      } else {
        const errData = await response.json().catch(() => ({}));
        lastError = new Error(errData.detail || errData.message || `HTTP ${response.status}`);
      }
    } catch (err) {
      lastError = err;
    }
  }

  console.error('[MongoDB Storage Error] Failed to persist assessment directly to database:', lastError?.message);
  throw (lastError || new Error('Failed to connect to MongoDB server'));
}




