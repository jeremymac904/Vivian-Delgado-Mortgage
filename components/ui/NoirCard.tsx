import React from "react";

type NoirCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  microLabel?: string;
};

const NoirCard: React.FC<NoirCardProps> = ({ title, microLabel, className = "", children, ...rest }) => {
  return (
    <div className={`noir-panel p-6 ${className}`} {...rest}>
      {microLabel ? <p className="micro-label mb-3">{microLabel}</p> : null}
      {title ? <h3 className="text-xl font-bold mb-4">{title}</h3> : null}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default NoirCard;
