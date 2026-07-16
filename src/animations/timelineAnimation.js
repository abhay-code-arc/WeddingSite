import gsap from 'gsap';

export function playTimelineAnimation(section) {
  const line = section.querySelector('[data-line]');
  const events = section.querySelectorAll('[data-event]');
  const dots = section.querySelectorAll('[data-dot]');

  gsap.set(line, {
    scaleY: 0,
    transformOrigin: 'top center',
  });

  gsap.set(dots, {
    scale: 0,
    opacity: 0,
  });

  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
  });

  // Start the journey
  tl.to(line, {
    scaleY: 0.25,
    duration: 0.55,
  });

  events.forEach((event, index) => {
    // Dot appears
    tl.to(
      dots[index],
      {
        scale: 1,
        opacity: 1,
        duration: 0.32,
        ease: 'back.out(1.4)',
      },
      '-=0.05'
    );

    // Soft glow
    tl.to(
      dots[index],
      {
        boxShadow: '0 0 18px rgba(212,175,55,.65), 0 0 35px rgba(212,175,55,.30)',
        duration: 0.22,
        repeat: 1,
        yoyo: true,
      },
      '<'
    );

    // Reveal event
    tl.to(
      event,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      '-=0.08'
    );

    // Continue line
    if (index < events.length - 1) {
      const progress = (index + 2) / events.length;

      tl.to(
        line,
        {
          scaleY: progress,
          duration: 0.45,
        },
        '-=0.15'
      );
    }
  });

  tl.to(line, {
    scaleY: 1,
    duration: 0.3,
  });

  tl.call(() => {
    window.dispatchEvent(new Event('timeline-animation-complete'));
  });

  return tl;
}
