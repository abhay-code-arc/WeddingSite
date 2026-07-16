import { gsap } from 'gsap';

export function playCountdownAnimation(section) {
  const q = gsap.utils.selector(section);

  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
  });

  tl.to(q('.countdown-heading'), {
    opacity: 1,
    y: 0,
    duration: 0.8,
  })
    .to(
      q('.countdown-counter'),
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
      },
      '-=0.2'
    )
    .to(
      q('.countdown-separator'),
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
      },
      '-=0.25'
    )
    .to(
      q('.countdown-details'),
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
      },
      '-=0.15'
    )
    .call(() => {
      window.dispatchEvent(new Event('countdown-animation-complete'));
    });

  return tl;
}
