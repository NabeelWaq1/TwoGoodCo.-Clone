function scrollLoco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
scrollLoco();


function NavAnimated() {
    gsap.to('nav .svg svg',{
        y : -83, 
        duration : .5,   
        scrollTrigger : {
            scroller : '#main',
            trigger : '#page1',
            start : 'top -20%',
            end : 'top 15%',
            scrub : .5,
        },
        
    })
    gsap.to('nav .nav-part2 .links',{
        y : -83, 
        duration : 1,
         opacity : 0,  
        scrollTrigger : {
            scroller : '#main',
            trigger : '#page1',
            start : 'top -1%',
            end : 'top 50%',
            scrub : 1,
            ease : Power2,
            
        },
        
    })
}
NavAnimated()
function videoPlayBtnAnimation(){
    let videobtn = document.querySelector('.vid-p1 h1')
    let video = document.querySelector('.vid-p1')
    
    video.addEventListener('mouseenter', ()=>{
    gsap.to(videobtn,{
        opacity : 1,
        scale : 1,
    })})
    video.addEventListener('mouseleave', ()=>{
    gsap.to(videobtn,{
        opacity : 0,
        scale : 0,
    })})
    video.addEventListener('mousemove', (dets)=>{
      gsap.to(videobtn,{
        top : dets.y+ 300 +'px',
        left : dets.x - 50 +  'px',
        ease : Power2,
      })
    })
}
videoPlayBtnAnimation()

function LoadingAnimation(){
    gsap.from('#page1>.text-p1>h1',{
        y : 100,
        opacity : 0,
        delay : 0.5,
        duration : 0.6,
        stagger : 0.3,
        })
    gsap.from('#page1 video',{
        scale : 0.9,
        opacity : 0,
        delay : 1.3,
        duration : 0.4,
        })
}
LoadingAnimation()


document.addEventListener('mousemove',(dets)=>{
    gsap.to('.cursor',{
        top:dets.y,
        left:dets.x,
    })
})

document.querySelector('#child1').addEventListener('mouseenter',()=>{
    gsap.to('.cursor',{
        scale : 1,
        backgroundColor : '#97A69B',
        opacity : .7,
        
    })
})
document.querySelector('#child1').addEventListener('mouseleave',()=>{
    gsap.to('.cursor',{
        scale : 0,
        
    })
})
document.querySelector('#child2').addEventListener('mouseenter',()=>{
    gsap.to('.cursor',{
        scale : 1,
        backgroundColor : '#3E4034',
        opacity : .7,
    })
})
document.querySelector('#child2').addEventListener('mouseleave',()=>{
    gsap.to('.cursor',{
        scale : 0,
        
    })
})
document.querySelector('#child3').addEventListener('mouseenter',()=>{
    gsap.to('.cursor',{
        scale : 1,
        backgroundColor : '#57594A',
        opacity : .7,
    })
})
document.querySelector('#child3').addEventListener('mouseleave',()=>{
    gsap.to('.cursor',{
        scale : 0,
        
    })
})
document.querySelector('#child4').addEventListener('mouseenter',()=>{
    gsap.to('.cursor',{
        scale : 1,
        backgroundColor : '#0D0D0D',
        opacity : .7,
    })
})
document.querySelector('#child4').addEventListener('mouseleave',()=>{
    gsap.to('.cursor',{
        scale : 0,
        
    })
})