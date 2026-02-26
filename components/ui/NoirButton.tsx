import React from "react";
import { Link } from "react-router-dom";

type NoirButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
};

const NoirButton: React.FC<NoirButtonProps> = ({ children, to, href, variant = "secondary", className = "", target, rel }) => {
  const classes = `${variant === "primary" ? "btn-metal btn-metal--primary" : "btn-metal"} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} target={target} rel={rel}>
      {children}
    </a>
  );
};

export default NoirButton;
