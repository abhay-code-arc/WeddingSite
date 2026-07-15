import { gsap } from 'gsap';

export function playCelebrationsAnimation(section) {
  const q = gsap.utils.selector(section);

  gsap.set(q('.celebration-card'), {
    opacity: 0,
    y: 40,
  });

  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out',
    },
  });

  tl.to(q('.celebration-card'), {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.25,
  });

  return tl;
}
