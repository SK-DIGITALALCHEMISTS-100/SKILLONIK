/**
 * Interview Preparation API Module
 * Direct MongoDB Operations for Assessment Attempts, Previous Marks, and Reassignments
 */

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function getAuthHeaders(overrideEmail = null) {
  const token = localStorage.getItem('skillonik_token') || sessionStorage.getItem('skillonik_token') || localStorage.getItem('token');
  const userStr = localStorage.getItem('skillonik_user') || sessionStorage.getItem('skillonik_user') || localStorage.getItem('user');
  let userEmail = overrideEmail || '';

  if (!userEmail && userStr) {
    try {
      const parsed = JSON.parse(userStr);
      userEmail = parsed.email || parsed.user_email || '';
    } catch {}
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (userEmail) {
    headers['X-User-Email'] = userEmail;
  }

  return { headers, userEmail };
}

/**
 * Fetch the latest interview assessment for a specific domain directly from MongoDB
 */
export async function fetchLatestInterviewAssessment(domain, email = null) {
  const { headers, userEmail } = getAuthHeaders(email);
  const targetEmail = (email || userEmail || '').trim().toLowerCase();

  const endpoints = [
    `/api/interview/latest/${encodeURIComponent(domain)}`,
    `${API_URL}/api/interview/latest/${encodeURIComponent(domain)}`,
    `http://127.0.0.1:8000/api/interview/latest/${encodeURIComponent(domain)}`,
    `http://localhost:8000/api/interview/latest/${encodeURIComponent(domain)}`
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
      // Continue to next fallback
    }
  }

  return {
    attended: false,
    latest: null
  };
}

/**
 * Save candidate interview assessment result directly into MongoDB interview_preparation collection
 */
export async function saveInterviewAssessment(resultData, email = null) {
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

  const endpoints = [
    `/api/interview/submit`,
    `/api/interview`,
    `${API_URL}/api/interview/submit`,
    'http://127.0.0.1:8000/api/interview/submit',
    'http://localhost:8000/api/interview/submit'
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
        console.log(`[Interview MongoDB Direct Write] Saved via ${endpoint}:`, data);
        return data;
      } else {
        const errData = await response.json().catch(() => ({}));
        lastError = new Error(errData.detail || errData.message || `HTTP ${response.status}`);
      }
    } catch (err) {
      lastError = err;
    }
  }

  console.error('[Interview Storage Error] Failed to persist interview result to database:', lastError?.message);
  throw (lastError || new Error('Failed to connect to MongoDB server'));
}
