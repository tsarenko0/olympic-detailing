export const COOKIE_CONSENT_STORAGE_KEY = "amg-cookie-consent" as const;
export const COOKIE_CONSENT_ACCEPTED = "accepted" as const;

export function hasCookieConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) === COOKIE_CONSENT_ACCEPTED;
  } catch {
    return false;
  }
}

export function acceptCookieConsent(): void {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, COOKIE_CONSENT_ACCEPTED);
  } catch {
    // ignore quota / private mode errors
  }
}
