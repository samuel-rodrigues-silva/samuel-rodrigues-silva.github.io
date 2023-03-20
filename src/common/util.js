export const trigerAnimation = (className) => {
  const startAnimation = (entries, _) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('appear', entry.isIntersecting);
    });
  };

  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 };

  const elements = document.querySelectorAll(className);
  elements.forEach((el) => {
    observer.observe(el, options);
  });
};
