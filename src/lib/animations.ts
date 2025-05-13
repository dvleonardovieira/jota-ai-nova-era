
import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAnimations = () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-out',
    once: false,
    mirror: true,
  });
};
