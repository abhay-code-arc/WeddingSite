import { useEffect, useRef } from 'react';

function useReveal(callback) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        callback(ref.current);

        observer.disconnect();
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [callback]);

  return ref;
}

export default useReveal;
