export type LiveStatus="idle"|"connecting"|"connected"|"error";
export function createGeminiLiveSocket(token:string){const url="wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent";return new WebSocket(`${url}?access_token=${encodeURIComponent(token)}`);}
