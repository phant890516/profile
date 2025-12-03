import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import SplitType from "splitype";

let lenis;

export function initializeAllAnimations(navigate) {
  // ---------- Lenis 平滑滾動 ----------
  if (lenis){
    lenis = new Lenis({ autoRaf: true, smoothWheel: true });
    function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  };

  // ---------- GSAP 動畫 ----------
  gsap.to(".link a", { y: 0, duration: 0.1, stagger: 0.1, ease: "power4.out", delay: 1 });

  if (document.querySelector(".hero h1")) {
    const heroText = new SplitType(".hero h1", { types: "chars" });
    gsap.set(heroText.chars, { y: 400 });
    gsap.to(heroText.chars, { y: 0, duration: 1, stagger: 0.075, ease: "power4.out", delay: 1 });
  }

  if (document.querySelector(".info p")) {
    const text = new SplitType(".info p", { types: "lines", tagName: "div", lineClass: "line" });
    text.lines.forEach(line => (line.innerHTML = `<span>${line.innerHTML}</span>`));
    gsap.set(".info p .line span", { y: 400, display: "block" });
    gsap.to(".info p .line span", { y: 0, duration: 2, stagger: 0.075, ease: "power4.out", delay: 0.25 });
  }

  // ---------- View Transition ----------
  if ("navigation" in window) {
    navigation.addEventListener("navigate", (event) => {
      if (!event.destination.url.includes(document.location.origin)) return;
      event.intercept({
        handler: async () => {
          const response = await fetch(event.destination.url);
          const text = await response.text();
          const transition = document.startViewTransition(() => {
            if (navigate) navigate(new URL(event.destination.url).pathname);
          });
          transition.ready.then(() => {
            window.scrollTo(0, 0);
            initializeAllAnimations(navigate);
          });
        },
        scroll: "manual",
      });
    });
  }
}
