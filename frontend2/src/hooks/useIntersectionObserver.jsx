export default function useIntersectionObserver(callback) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    },
    { threshold: 1 }
  );

  const observe = (element) => {
    observer.observe(element);
  };

  const unobserve = (element) => {
    observer.unobserve(element);
  };

  return [observe, unobserve];
}
