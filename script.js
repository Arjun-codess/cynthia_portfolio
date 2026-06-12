const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// 1st page animetion ke liye  
function firstPageAnim(){
    var tl = gsap.timeline();
    // sliding from up to down

    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

    })
    // sliding from down to top
    .to(".boundingelem", {
        y: "0",
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: .2

    })
    // sliding from up to down 
    .from("#herofooter", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut

    })


}
// cursor wala mouse ke liye animation using clientX and clientY and using clamp(function in gsap)
function circleChaptaKaro(){


    var xscale =1;
    var yscale =1;


    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove" , function(dets){
        
        xscale= gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale= gsap.utils.clamp(.8,1.2,dets.clientY - yprev);


        xprev = dets.clientX;
        yprev = dets.clientY;


     })
}
// mouse follower
function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets.clientX, dets.clientY);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}


circleChaptaKaro();
circleMouseFollower();
firstPageAnim();



// getting photo element and add animation (sliding left to right and vice-versa)
document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});