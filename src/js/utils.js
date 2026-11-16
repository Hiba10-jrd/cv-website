export const escapeHTML = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function safeURL(value, protocol = 'https:') { try { const u = new URL(value); return u.protocol === protocol ? u.href : null; } catch { return null; } }
