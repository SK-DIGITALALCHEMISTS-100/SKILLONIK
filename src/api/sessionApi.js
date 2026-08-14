const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

/**
 * Helper to retrieve current auth headers for a specific email or active user
 */
function getAuthHeaders(overrideEmail = null) {
  const token = localStorage.getItem('skillonik_token') || sessionStorage.getItem('skillonik_token');
  const userStr = localStorage.getItem('skillonik_user') || sessionStorage.getItem('skillonik_user');
  let userEmail = overrideEmail || '';

  if (!userEmail && userStr) {
    try {
      const user = JSON.parse(userStr);
      userEmail = user.email || '';
    } catch {
      userEmail = '';
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

// =====================================================
// GET SAVED SESSIONS FROM MONGODB FOR LOGGED-IN EMAIL
// =====================================================
export async function fetchSessionsFromDB(email = null) {
  const { headers, userEmail } = getAuthHeaders(email);
  const targetEmail = (email || userEmail || '').trim().toLowerCase();

  if (!targetEmail) {
    return [];
  }

  try {
    const url = `${API_URL}/api/sessions${targetEmail ? `?email=${encodeURIComponent(targetEmail)}` : ''}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.detail || errData.message || 'Failed to fetch sessions from MongoDB database');
    }

    const data = await response.json();
    const list = Array.isArray(data) ? data : (data.sessions || []);

    // Filter strictly by user email if present on document
    return list.filter(item => {
      if (!item) return false;
      if (!item.user_email) return true; // Legacy document
      return item.user_email.toLowerCase() === targetEmail;
    });
  } catch (error) {
    console.warn('MongoDB session fetch warning (falling back to user local cache):', error.message);
    throw error;
  }
}

// =====================================================
// SAVE / CREATE NEW SESSION IN MONGODB DATABASE
// =====================================================
export async function createSessionInDB(sessionData, email = null) {
  const { headers, userEmail } = getAuthHeaders(email);
  const targetEmail = (email || userEmail || sessionData?.user_email || '').trim().toLowerCase();

  const payload = {
    ...sessionData,
    user_email: targetEmail || undefined,
  };

  try {
    const response = await fetch(`${API_URL}/api/sessions`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.detail || errData.message || 'Failed to save session in MongoDB');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.warn('MongoDB session save warning:', error.message);
    throw error;
  }
}

// =====================================================
// UPDATE EXISTING SESSION IN MONGODB DATABASE
// =====================================================
export async function updateSessionInDB(sessionId, sessionData, email = null) {
  const { headers, userEmail } = getAuthHeaders(email);
  const targetEmail = (email || userEmail || sessionData?.user_email || '').trim().toLowerCase();

  const payload = {
    ...sessionData,
    user_email: targetEmail || undefined,
  };

  try {
    const response = await fetch(`${API_URL}/api/sessions/${sessionId}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Fallback try PATCH
      const patchResponse = await fetch(`${API_URL}/api/sessions/${sessionId}`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (!patchResponse.ok) {
        const errData = await patchResponse.json().catch(() => ({}));
        throw new Error(errData.detail || errData.message || 'Failed to update session in MongoDB');
      }

      return await patchResponse.json();
    }

    return await response.json();
  } catch (error) {
    console.warn('MongoDB session update warning:', error.message);
    throw error;
  }
}

// =====================================================
// DELETE SESSION FROM MONGODB DATABASE
// =====================================================
export async function deleteSessionFromDB(sessionId, email = null) {
  const { headers } = getAuthHeaders(email);

  try {
    const response = await fetch(`${API_URL}/api/sessions/${sessionId}`, {
      method: 'DELETE',
      headers: headers,
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.detail || errData.message || 'Failed to delete session from MongoDB');
    }

    return await response.json();
  } catch (error) {
    console.warn('MongoDB session delete warning:', error.message);
    throw error;
  }
}
