const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

/**
 * Helper to retrieve current auth headers
 */
function getAuthHeaders() {
  const token = localStorage.getItem('skillonik_token') || sessionStorage.getItem('skillonik_token');
  const userStr = localStorage.getItem('skillonik_user') || sessionStorage.getItem('skillonik_user');
  let userEmail = '';
  try {
    if (userStr) {
      const user = JSON.parse(userStr);
      userEmail = user.email || '';
    }
  } catch {
    userEmail = '';
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

  return headers;
}

// =====================================================
// GET ALL SAVED SESSIONS FROM MONGODB DATABASE
// =====================================================
export async function fetchSessionsFromDB() {
  try {
    const response = await fetch(`${API_URL}/api/sessions`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.detail || errData.message || 'Failed to fetch sessions from MongoDB database');
    }

    const data = await response.json();
    return Array.isArray(data) ? data : (data.sessions || []);
  } catch (error) {
    console.warn('MongoDB session fetch warning (falling back to local cache):', error.message);
    throw error;
  }
}

// =====================================================
// SAVE / CREATE NEW SESSION IN MONGODB DATABASE
// =====================================================
export async function createSessionInDB(sessionData) {
  try {
    const response = await fetch(`${API_URL}/api/sessions`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(sessionData),
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
export async function updateSessionInDB(sessionId, sessionData) {
  try {
    const response = await fetch(`${API_URL}/api/sessions/${sessionId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(sessionData),
    });

    if (!response.ok) {
      // Fallback try PATCH
      const patchResponse = await fetch(`${API_URL}/api/sessions/${sessionId}`, {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify(sessionData),
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
export async function deleteSessionFromDB(sessionId) {
  try {
    const response = await fetch(`${API_URL}/api/sessions/${sessionId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
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
