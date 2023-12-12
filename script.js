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


//home page cursor animation
function cursorAnimation() {
    var homeContent = document.querySelector("#home #content")
    var cursorPointer = document.querySelector("#cursor")

    homeContent.addEventListener("mousemove", function (dets) {
        // to make cursor to move along the mouse co ordinates
        // dets contains all the properties of a mouse cursor like the co ordinates of the axis and all the other
        // cursorPointer.style.left = dets.x+"px"
        // cursorPointer.style.top = dets.y+"px"

        gsap.to(cursorPointer, {
            duration: 0.8,
            overwrite: "auto",
            x: dets.x,
            y: dets.y,
            // ease: "power20"
        });
    })

    homeContent.addEventListener("mouseleave", function () {
        gsap.to(cursorPointer, {
            scale: 0,
            opacity: 0.5
        })
    })

    homeContent.addEventListener("mouseenter", function () {
        gsap.to(cursorPointer, {
            scale: 1,
            opacity: 1
        })
    })

    // gsap community code 
    // homeContent.addEventListener("mousemove", (e) => {
    //     gsap.to(cursorPointer, {
    //         duration: 0.5,
    //         overwrite: "auto",
    //         x: e.clientX,
    //         y: e.clientY,
    //         ease: "power20"
    //     });
    // })
}
cursorAnimation()

function page2Animation(){

}