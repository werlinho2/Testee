import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useGlobalAnimations = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scrolled-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(
        'h1:not(.no-animate), h2:not(.no-animate), h3:not(.no-animate), h4:not(.no-animate), p:not(.no-animate), .result-card:not(.no-animate), .feature-card:not(.no-animate), .clinic-card:not(.no-animate)'
      );
      
      elements.forEach((el, index) => {
        if (!el.classList.contains('scroll-anim')) {
          el.classList.add('scroll-anim');
        }
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]);
};

export default useGlobalAnimations;
