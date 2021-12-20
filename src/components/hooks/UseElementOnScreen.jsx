import { useEffect, useMemo, useState } from "react";

const UseElementOnScreen = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  });

  return isVisible;
};

export default UseElementOnScreen;
