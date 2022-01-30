import React, { RefObject, useState, useEffect } from 'react';

export function useIntersect(
  targetRef: RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: '0px',
  }
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const isIntersecting = entry?.isIntersecting;

  const updateEntry = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setEntry(entry);
  };
  useEffect(() => {
    const target = targetRef?.current;
    const isIntersecting = entry?.isIntersecting;
    if (isIntersecting || !target) return;

    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [
    targetRef,
    options.root,
    options.rootMargin,
    options.threshold,
    isIntersecting,
  ]);

  return entry;
}
