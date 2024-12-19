var slidetl = gsap.timeline({ease:"slow",repeatDelay:0.3,})
slidetl.from(".slide",{
    y:-1000,
    duration:1.2,
    
})

var tl = gsap.timeline({repeat:-1,repeatDelay:0.4,ease:"power4.out",})
tl.from(".loadcircle1",{
    y:-20,
    repeat:0,
    opacity:0,
    duration:0.4,
    stagger:0.1,
    ease: "power4.out",
})

tl.from(".loadcircle2",{
    y:-20,
    repeat:0,
    opacity:0,
    duration:0.4,
    stagger:0.1,
    ease: "circ.out"
})

tl.from(".loadcircle3",{
    y:-20,
    opacity:0,
    duration:0.4,
    stagger:0.1,
    repeat:0,
})

tl.from(".loadcircle4",{
    y:-20,
    opacity:0,
    stagger:0.1,
    duration:0.4,
    repeat:0,
})
var moveleft = gsap.timeline({
    delay:5,
})
moveleft.to(".slide",{
    x:1500,
    duration:0.4,
    ease:"sine",
    opacity:0,
})


