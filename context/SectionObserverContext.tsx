import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  RefObject,
  ReactNode,
} from "react";

type Section = {
  id: string;
  ref: RefObject<HTMLDivElement>;
  bg: "light" | "dark";
};

interface SectionObserverContextType {
  registerSection: (section: Section) => void;
  unregisterSection: (id: string) => void;
  activeSection: string | null;
  activeBg: "light" | "dark" | null;
}

const SectionObserverContext = createContext<
  SectionObserverContextType | undefined
>(undefined);

export const useSectionObserver = (): SectionObserverContextType => {
  const context = useContext(SectionObserverContext);
  if (!context) {
    throw new Error(
      "useSectionObserver must be used within SectionObserverProvider",
    );
  }
  return context;
};

export const SectionObserverProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const sectionRefs = useRef<Map<string, Section>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeBg, setActiveBg] = useState<"light" | "dark">("dark");

  const registerSection = (section: Section) => {
    if (!section.ref.current) return;
    const existing = sectionRefs.current.get(section.id);
    if (!existing) {
      sectionRefs.current.set(section.id, section);

      if (observerRef.current && section.ref.current) {
        observerRef.current.observe(section.ref.current);
      }
    }
  };

  const unregisterSection = (id: string) => {
    const section = sectionRefs.current.get(id);
    if (section?.ref.current && observerRef.current) {
      observerRef.current.unobserve(section.ref.current);
    }
    sectionRefs.current.delete(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by intersectionRatio descending
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries[0];
          const id = topEntry.target.getAttribute("data-section-id");
          const section = id ? sectionRefs.current.get(id) : null;

          if (section) {
            setActiveSection(section.id);
            setActiveBg(section.bg); // This will become 'light'
          }
        } else {
          setActiveSection(null);
          setActiveBg("dark"); // default
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px 0px -40% 0px",
      },
    );

    observerRef.current = observer;

    sectionRefs.current.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      observerRef.current?.disconnect();
      sectionRefs.current.clear();
    };
  }, []);

  return (
    <SectionObserverContext.Provider
      value={{
        registerSection,
        unregisterSection,
        activeSection,
        activeBg,
      }}
    >
      {children}
    </SectionObserverContext.Provider>
  );
};
