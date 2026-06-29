import { gsap } from 'gsap';

export function playStoryAnimation(section) {
  const q = gsap.utils.selector(section);

  gsap
    .timeline({
      defaults: {
        ease: 'power3.out',
      },
    })

    .fromTo(
      q('[data-story="divider"]'),
      {
        opacity: 0,
        scaleX: 0.4,
      },
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.6,
      }
    )

    .fromTo(
      q('[data-story="label"]'),
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      '-=0.25'
    )

    .fromTo(
      q('[data-story="title"]'),
      {
        opacity: 0,
        y: 35,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      '-=0.3'
    )

    .fromTo(
      q('[data-story="paragraph"]'),
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.2,
      },
      '-=0.2'
    )

    .fromTo(
      q('[data-story="ornament"]'),
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      },
      '-=0.2'
    );
}
