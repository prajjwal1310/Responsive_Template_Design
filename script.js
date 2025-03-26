function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
locomotiveAnimation();

let menu = document.querySelector("nav .eksath .menu i");
let drop = document.querySelector("nav .eksath .part2");
let btn = document.querySelector("nav .eksath .part2 button");
let flag = 1;
let check = 1;

menu.addEventListener("click", () => {
  if (flag == 1) {
    flag = 0;
    if (check == 1) {
      check = 0;
      gsap.from(drop, {
        opacity: 0,
        y: 20,
      });
    } else {
      gsap.to(drop, {
        opacity: 1,
        y: 0,
      });
    }
    drop.style.position = "absolute";
    btn.style.display = "block";
    drop.style.backgroundColor = "black";
    drop.style.color = "white";
    drop.style.top = 50 + "px";
    drop.style.left = 0 + "px";
    drop.style.display = "flex";
  } else {
    flag = 1;
    gsap.to(drop, {
      opacity: 0,
      y: 20,
    });
  }
});

gsap.from("#page1 .img img",{
  y: 30
})

var tl=gsap.timeline();
tl.from("#page2 .img",{
  x: -50,
  opacity: 0,
  scrollTrigger: ("#page2 .img",{
    scroller: "#main",
    trigger: "#page2 .img",
    start: "top 90%",
    end: "top 50%",
    scrub: 0.5
  })
})
tl.from("#page2 .description h3",{
  x: 150,
  opacity: 0,
  scrollTrigger: ("#page2 .description h3",{
    scroller: "#main",
    trigger: "#page2 .description h3",
    start: "top 80%",
    end: "top 60%",
    scrub: 0.5
  })
})
tl.from("#page2 .description p",{
  x: -150,
  opacity: 0,
  scrollTrigger: ("#page2 .description p",{
    scroller: "#main",
    trigger: "#page2 .description p",
    start: "top 95%",
    end: "top 70%",
    scrub: 0.5
  })
})
tl.from("#page2 .content h5",{
  y: -100,
  opacity: 0,
  fontSize: 3+"vw",
  scrollTrigger: ("#page2 .content h5",{
    scroller: "#main",
    trigger: "#page2 .content h5",
    start: "top 50%",
    end: "top 30%",
    scrub: 0.5
  })
})

gsap.from("#page3 img",{
  scale: 0,
  scrollTrigger: ("#page3 img",{
    scroller: "#main",
    trigger: "#page3 img",
    start: "top 90%",
    end: "top 60%",
    scrub: 0.5
  })
})
tl.from("#page3 .top h3",{
  x: 150,
  opacity: 0,
  scrollTrigger: ("#page3 .top h3",{
    scroller: "#main",
    trigger: "#page3 .top h3",
    start: "top 80%",
    end: "top 50%",
    scrub: 0.5
  })
})

gsap.from("#page4 .img img",{
  y: 150,
  opacity: 0,
  scale: 0,
  scrollTrigger: ("#page4 .img img",{
    scroller: "#main",
    trigger: "#page4 .img img",
    start: "top 80%",
    end: "top 60%",
    scrub: 0.5
  })
})

gsap.from("#page5 .img img",{
  y: 150,
  opacity: 0,
  scale: 0,
  scrollTrigger: ("#page5 .img img",{
    scroller: "#main",
    trigger: "#page5 .img img",
    start: "top 100%",
    end: "top 80%",
    scrub: 0.5
  })
})

tl.from("#page6 .heading h2",{
  x: -150,
  opacity: 0,
  rotate: 135+"deg",
  scrollTrigger: ("#page6 .heading h2",{
    scroller: "#main",
    trigger: "#page6 .heading h2",
    start: "top 65%",
    end: "top 50%",
    scrub: 0.5
  })
})