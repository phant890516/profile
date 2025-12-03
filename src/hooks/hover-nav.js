import { gsap } from "gsap";

export function HoverNav(selector = ".hover-target") {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    let elem = el.querySelector(".target-text");
    if (!elem) return;

    // 複製 2 次 → 變成 3 個 span
    for (let i = 0; i < 2; i++) {
      let clone = elem.cloneNode(true);
      elem.after(clone);
    }

    let targets = gsap.utils.toArray(el.querySelectorAll(".target-text"));

    let tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "power1.inOut" },
      paused: true,
    });

    // 舊文字往下
    tl.to(targets[2], { yPercent: 100 });
    // 新文字從上進來
    tl.from([targets[0], targets[1]], { yPercent: -100, stagger: -0.08 }, 0);

    // hover 事件
    el.addEventListener("mouseenter", () => 
        {
         tl.restart();   
        });
  });
}
