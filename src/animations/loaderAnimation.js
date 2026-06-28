import { gsap } from 'gsap';

export function playLoaderAnimation(loaderRef, onComplete) {
  const q = gsap.utils.selector(loaderRef);

  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out',
    },
  });

  /* Initial State */

  tl.set(q('.loader-letter'), {
    opacity: 0,
    y: 24,
  });

  tl.set(q('.loader-line'), {
    scaleX: 0,
    transformOrigin: 'center center',
  });

  /* Small Intro */

  tl.to({}, { duration: 0.18 });

  /* A */

  tl.to(q('.loader-letter.a'), {
    opacity: 1,
    y: 0,
    duration: 0.55,
  });

  /* Line */

  tl.to(
    q('.loader-line'),
    {
      scaleX: 1,
      duration: 0.35,
    },
    '-=0.18'
  );

  /* K */

  tl.to(
    q('.loader-letter.k'),
    {
      opacity: 1,
      y: 0,
      duration: 0.55,
    },
    '-=0.18'
  );

  /* Hold */

  tl.to({}, { duration: 0.55 });

  /* Start Hero BEFORE fade completes */

  tl.call(() => {
    onComplete?.();
  });

  /* Fade Loader */

  tl.to(loaderRef, {
    opacity: 0,
    duration: 0.6,
    ease: 'power2.inOut',
  });

  return tl;
}
