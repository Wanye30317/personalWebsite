import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function scrollAnimation(){

    const sections = gsap.utils.toArray(".container .section");

    let scrollTween = gsap.to(sections,{
        xPercent: -100 * (sections.length - 1),
        duration:3,
        scrollTrigger: {
            trigger: '.container', 
            scrub:1,
            pin: true,
            scrub: 3,
            //markers:true,
        }
    })

    sections.map(s=>{
        let h2 = s.querySelectorAll("h2");
        let card = s.querySelectorAll(".card");

//all h2 animation====================================

        gsap.from(h2,{
            opacity: 0,
            scrollTrigger:{
                trigger: h2,
                containerAnimation: scrollTween,
                start: "left 60%",
                end:"end 30%",
                scrub:1,
                //markers: true,
            }
        })

//all skillcard animation===================================

        let cardtl = gsap.timeline({
            scrollTrigger:{
                trigger:card,
                containerAnimation: scrollTween,
                end:"right 50%",
                scrub:2,
                //markers: true,
            }
        });
        cardtl.fromTo(card,
            {y:-700,duration:1,},
            {y:0,rotateY:'180deg'})
    })

}


