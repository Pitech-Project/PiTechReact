"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HoveredLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: any;
}

export const HoveredLink = ({ href, children, onClick, className = "", ...rest }: HoveredLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`LinkUI ${isActive ? "active" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
