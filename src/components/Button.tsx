import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  href,
  target,
  rel,
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium text-sm md:text-base tracking-tight transition-all duration-200 cursor-pointer active:scale-[0.98] select-none text-center';

  let variantClasses = '';
  if (variant === 'primary') {
    variantClasses =
      'bg-[#6C8EFF] text-[#0B0D10] font-semibold rounded-full px-7 py-3 hover:bg-[#7C8CFF] transition-colors shadow-lg shadow-[#6C8EFF]/20';
  } else if (variant === 'secondary') {
    variantClasses =
      'bg-[#171A1F] text-[#F5F5F5] border border-[#272B33] rounded-full px-7 py-3 hover:bg-[#1D2127] hover:border-[#6C8EFF]/40 transition-colors shadow-sm';
  } else if (variant === 'tertiary') {
    variantClasses =
      'bg-[#252B45] text-[#6C8EFF] border border-[#6C8EFF]/30 rounded-full px-7 py-3 hover:bg-[#252B45]/80 transition-colors';
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={combinedClasses}
      >
        {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
