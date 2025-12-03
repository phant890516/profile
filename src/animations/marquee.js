import gsap from "gsap";

export function marquee(){
    gsap.to('#figma', {
    x: -1000,
    duration: 5,
    repeat: -1,
    ease: 'none',
    })

}