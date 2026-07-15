import gsap from 'gsap';

export function playTimelineAnimation(section) {
  const line = section.querySelector('[data-line]');
  const events = section.querySelectorAll('[data-event]');

  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
  });

  gsap.set(line, {
    scaleY: 0,
    transformOrigin: 'top center',
  });

  gsap.set(events, {
    opacity: 0,
    y: 40,
  });

  tl.to(line, {
    scaleY: 1,
    duration: 2,
  });

  events.forEach((event) => {
    tl.to(
      event,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      '-=0.35'
    );
  });
}
