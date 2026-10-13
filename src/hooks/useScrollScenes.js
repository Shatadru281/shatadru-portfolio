import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useScrollScenes() {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.to(".orb-svg", {
          y: 55,
          rotate: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.fromTo(
          ".about-statement .word",
          { color: "#afb3a6" },
          {
            color: "#19251e",
            stagger: 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: ".about-statement",
              start: "top 80%",
              end: "bottom 43%",
              scrub: 0.6,
            },
          },
        );
        gsap.fromTo(
          ".timeline-track",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: ".education-list",
              start: "top 78%",
              end: "bottom 70%",
              scrub: 0.4,
            },
          },
        );
      },
    );
    return () => media.revert();
  }, []);
}
