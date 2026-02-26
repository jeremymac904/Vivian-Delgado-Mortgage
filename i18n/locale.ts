import { useLocation } from "react-router-dom";

export type Locale = "en" | "es";

export const getLocaleFromPath = (pathname: string): Locale => {
  if (pathname.startsWith("/es")) return "es";
  return "en";
};

export const useLocale = (): Locale => {
  const { pathname } = useLocation();
  return getLocaleFromPath(pathname);
};

export const withLocalePath = (path: string, locale: Locale) => {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
};
