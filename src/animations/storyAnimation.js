import { gsap } from 'gsap';

export function playStoryAnimation(section) {
  const q = gsap.utils.selector(section);

  gsap.set(q('.story-paragraph'), {
    opacity: 0,
    y: 30,
  });

  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
  });

  tl.to(q('.story-paragraph'), {
    opacity: 1,
    y: 0,
    duration: 1.3,
    stagger: 0.8,
  });

  tl.call(() => {
    window.dispatchEvent(new Event('story-animation-complete'));
  });

  return tl;
}
