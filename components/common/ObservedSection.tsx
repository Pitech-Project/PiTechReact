import { useSectionObserver } from "@/context/SectionObserverContext";
import React, { useEffect, useRef } from "react";

interface ObservedSectionProps {
  id: string;
  bg?: "light";
  children: React.ReactNode;
  // style?: React.CSSProperties;
  className?: string;
}

const ObservedSection: React.FC<ObservedSectionProps> = ({
  id,
  bg,
  children,
  // style,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null!);
  const { registerSection, unregisterSection } = useSectionObserver();

  useEffect(() => {
    registerSection({ id, ref, bg: bg ?? "dark" });
    return () => unregisterSection(id);
  }, [id]);

  return (
    <div
      ref={ref}
      data-section-id={id}
      className={className}
      style={
        {
          // minHeight: '100vh',
          // ...style,
        }
      }
    >
      {children}
    </div>
  );
};

export default ObservedSection;
