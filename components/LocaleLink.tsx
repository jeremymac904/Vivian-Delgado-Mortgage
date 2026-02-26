import React from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import { getLocaleFromPath, withLocalePath } from "../i18n/locale";

const LocaleLink: React.FC<LinkProps> = ({ to, ...rest }) => {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const nextTo = typeof to === "string" ? withLocalePath(to, locale) : to;
  return <Link to={nextTo} {...rest} />;
};

export default LocaleLink;
