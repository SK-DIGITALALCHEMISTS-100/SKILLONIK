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

/**
 * Helper to extract code blocks from markdown text (handles \r\n and \n)
 */
export function extractCodeBlocks(text = '') {
  if (!text) return [];
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\r?\n([\s\S]*?)```/g;
  const blocks = [];
  let match;
  while ((match = codeBlockRegex.exec(text)) !== null) {
    blocks.push({
      language: match[1] || 'javascript',
      code: match[2].trim(),
      raw: match[0]
    });
  }
  return blocks;
}

/**
 * Format intent name into friendly label
 */
export function getIntentLabel(intent = '') {
  switch (intent?.toLowerCase()) {
    case 'roadmap':
      return '🎯 Learning Roadmap';
    case 'workflow':
      return '⚙️ Production Workflow';
    case 'doubt':
      return '💡 Concept & Doubt';
    default:
      return '🤖 AI Mentor Answer';
  }
}

/**
 * Send search or prompt query to the SKILLONIK AI backend
 * Endpoint: POST /api/message
 * Payload: { message: string, top_k: number }
 */
export async function sendChatMessage({ message, top_k = 2 }) {
  try {
    const response = await fetch(`${API_URL}/api/message`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        message: message.trim(),
        top_k: Number(top_k) || 2,
      }),
    });

    if (!response.ok) {
      let errMsg = `Backend API Error (${response.status})`;
      try {
        const errData = await response.json();
        errMsg = errData.detail || errData.message || errMsg;
      } catch {}
      throw new Error(errMsg);
    }

    const data = await response.json();

    // Determine confidence if provided
    let confidenceLabel = null;
    if (typeof data.confidence === 'number') {
      confidenceLabel = data.confidence;
    } else if (data.confidence) {
      confidenceLabel = String(data.confidence);
    }

    // Extract code snippet if present in markdown response
    const codeBlocks = extractCodeBlocks(data.answer || '');
    const firstCodeBlock = codeBlocks.length > 0 ? codeBlocks[0] : null;

    return {
      success: true,
      answer: data.answer || 'No response returned from the backend knowledge base.',
      intent: data.intent || 'doubt',
      intentLabel: getIntentLabel(data.intent),
      confidence: confidenceLabel,
      scores: data.scores || {},
      codeSnippet: firstCodeBlock ? firstCodeBlock.code : null,
      codeLanguage: firstCodeBlock ? firstCodeBlock.language : null,
    };
  } catch (error) {
    console.warn('Backend message connection failed:', error.message);
    throw error;
  }
}
