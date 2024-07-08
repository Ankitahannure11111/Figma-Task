import React from 'react';
import { NavLink as ReactRouterNavLink, NavLinkProps } from 'react-router-dom';

interface CustomNavLinkProps extends Omit<NavLinkProps, 'className'> {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  activeClassName = 'active',
  className,
  children,
  ...rest
}) => {
  return (
    <ReactRouterNavLink
      {...rest}
      className={({ isActive }) => (isActive ? `${className} ${activeClassName}` : className)}
    >
      {children}
    </ReactRouterNavLink>
  );
};

export default CustomNavLink;
