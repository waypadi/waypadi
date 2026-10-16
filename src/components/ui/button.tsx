import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'default' | 'dark' | 'small';
};

export function ButtonLink({ children, variant = 'default', className = '', ...props }: ButtonLinkProps) {
  return <a className={`button ${variant === 'dark' ? 'button-dark' : ''} ${variant === 'small' ? 'button-small' : ''} ${className}`.trim()} {...props}>{children}</a>;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'default' | 'dark';
};

export function Button({ children, variant = 'default', className = '', ...props }: ButtonProps) {
  return <button className={`button ${variant === 'dark' ? 'button-dark' : ''} ${className}`.trim()} {...props}>{children}</button>;
}
