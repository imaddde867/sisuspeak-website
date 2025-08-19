import React from 'react';

type ElementTag = React.ElementType;

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: ElementTag;
}

export default function Section({
  children,
  className = '',
  containerClassName = '',
  id,
  as: Tag = 'section',
}: SectionProps) {
  const Component = Tag as ElementTag;
  return (
    <Component id={id} className={`py-12 sm:py-16 ${className}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </Component>
  );
}
