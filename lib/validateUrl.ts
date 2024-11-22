export function validateUrl(url: string): boolean {
    return url.startsWith("www.") || url.startsWith("http://") || url.startsWith("https://");
  }
  
  export function formatUrl(url: string): string {
    return url.startsWith("http") ? url : `https://${url}`;
  }
  