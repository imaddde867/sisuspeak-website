import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Card({ children, className = '', as: Tag = 'div' }: CardProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${className}`}>
      {children}
    </Component>
  );
}
