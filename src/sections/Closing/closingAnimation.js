import { gsap } from 'gsap';

export function playClosingAnimation(section) {
  const q = gsap.utils.selector(section);

  gsap.set(
    [
      q('.closing-divider'),
      q('.closing-paragraph'),
      q('.closing-assistance'),
      q('.closing-contact'),
    ],
    {
      opacity: 0,
      y: 30,
    }
  );

  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
  });

  tl.to(q('.closing-divider'), {
    opacity: 1,
    y: 0,
    duration: 0.7,
  })
    .to(
      q('.closing-paragraph'),
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.45,
      },
      '-=0.2'
    )
    .to(
      q('.closing-assistance'),
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      '-=0.2'
    )
    .to(
      q('.closing-contact'),
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.12,
      },
      '-=0.3'
    );

  return tl;
}
