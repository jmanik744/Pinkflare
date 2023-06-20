var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
        start:"top top",
        scrub:1,
        pin:true,
        markers:true
    }

})
tl.from("#center",{
    x:"83%"
})

tl.to("#circle #btm img",{
    scale:.6,
    rotate:"-180deg",
    ease: Expo.easeInOut,
    stagger:.1
},"same")
tl.to("#circle #top img",{
    scale:.6,
    ease: Expo.easeInOut,
    stagger:.1
},"same")

tl.to("#scircle",{
    bottom:"38%",
    scale:1.5,
    ease: Power1,
},"same")

tl.to("#overlay>h1",{
    y:"200%",
    ease: Expo.easeInOut
},"same")

tl.to("#center>h5",{
    opacity:0
},"same")
tl.to("#cimg img",{
    scale:0,
    opacity:0
},"same")
tl.to("#circle",{
    scale:0,
    ease:Power1
},'-=.5',"b")
tl.to("#smcircle",{
    scale:0,
    ease:Power1
},'-=.5',"b")
tl.to("#scircle",{
    opacity:0,
    scale:0
},'-=.4')

tl.from("#overlay>h2",{
    y:"170%",
    rotate:"10deg",
    ease: Power1,
},'-=.6')
tl.from("#box",{
    y:"280%",
    ease: Power1,
},'-=.2')


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#second",
        start:"top top",
        scrub:1,
        pin:true,
        markers:true
    }

})

tl.from("#sc1",{
    y:"80%",
    ease: Power1,
    opacity:0,
    scale:0.5
})
tl.from("#sc2",{
    y:"80%",
    ease: Power1,
    opacity:0,
    scale:0.5
},'-=.4')
tl.to("#sc1",{
    x:81
},"same1")
tl.to("#sc2",{
    x:-81  
},"same1")
tl.to("#sc1",{
    scale:0.7   
},"same2")
tl.to("#sc2",{
    scale:0.7   
},"same2")
tl.to("#sc1",{
 scale:10
},"s3")
tl.to("#sc2",{
 scale:10
},"s3")
tl.from("#ts1 h1",{
    x:"190%",
    duration:5,
    ease: Power1
},"same3")
tl.to("#sc1",{
    background:"linear-gradient(to right, #d5a7b4,#b4aad5)",
    duration:5,
    delay:2
},"same3")
tl.to("#s2 p",{
    opacity:0,
    duration:2,
    delay:.5
},"same3")
tl.to("#s2>h1",{
    opacity:1,
    duration:4,
    delay:2
},"same3")
tl.from("#r1",{
    y:"150%",
    duration:.9,
    delay:1
})
tl.from("#r2",{
    y:"150%",
    duration:.8
},'-=.5')
tl.from("#r3",{
    y:"150%",
    duration:.7
},'-=.5')
tl.from("#r4",{
    y:"150%",
    duration:.6
},'-=.5')
tl.from("#r5",{
    y:"150%",
    duration:.5
},'-=.5')
tl.to("#rb1",{
    x:"-50%",
    delay:2
},"a")
tl.to("#rb2",{
    x:"-50%",
},"a")
tl.to("#rb3",{
    x:"-50%",
},"a")
tl.to("#rb4",{
    x:"-50%",
},"a")
tl.to("#rb5",{
    x:"-50%",
},"a")
tl.to("#rb6",{
    x:"-50%",
},"a")
tl.to("#rb7",{
    x:"-50%",
},"a")
tl.to("#rb8",{
    x:"-50%",
},"a")
tl.to("#rb9",{
    x:"-50%",
},"a")
tl.to("#rb",{
    x:"-50%",
},"a")
tl.to("#rb11",{
    x:"-50%",
},"a")
tl.to("#rb12",{
    x:"-50%",
},"a")
tl.to("#rb1",{
    x:"-70%",
},"b")
tl.to("#rb3",{
    x:"-70%",
},"b")
tl.to("#rb5",{
    x:"-70%",
},"b")
tl.to("#rb7",{
    x:"-70%"
},"b")
tl.to("#rb9",{
    x:"-70%"
},"b")
tl.to("#rb11",{
    x:"-70%"
},"b")