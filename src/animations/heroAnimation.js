import { gsap } from 'gsap';

export function playHeroAnimation(heroRef) {
  const q = gsap.utils.selector(heroRef);

  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out',
    },
  });

  tl.to(q('[data-animate="overline"]'), {
    opacity: 1,
    y: 0,
    duration: 0.8,
  });

  tl.to(
    q('[data-animate="groom"]'),
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    '-=0.25'
  );

  tl.to(
    q('[data-line]'),
    {
      scaleX: 1,
      duration: 0.8,
      stagger: 0,
    },
    '-=0.25'
  );

  tl.to(
    q('[data-ampersand]'),
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
    },
    '-=0.45'
  );

  tl.to(
    q('[data-animate="bride"]'),
    {
      opacity: 1,
      y: 0,
      duration: 1,
    },
    '-=0.25'
  );

  tl.to(
    q('[data-animate="date"]'),
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
    },
    '-=0.25'
  );

  tl.to(
    q('[data-animate="button"]'),
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
    },
    '-=0.2'
  );

  return tl;
}
