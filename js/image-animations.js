// import {
// 	TimelineMax
// } from "gsap/TweenMax";
// import ScrollMagic from "scrollmagic";
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";


// export default function imageCover() {
// 	// image animation - don't play on load
// 	// let tlImage = new TimelineMax();

// 	// tlImage.from(".image-cover", 0.5, {
// 	// 	scaleX: 0,
// 	// 	transformOrigin: "left",
// 	// })
// 	// 	.to(".image-cover", 1, {
// 	// 		scaleX: 0,
// 	// 		transformOrigin: "right"
// 	// 	}, "reveal")
// 	// 	.from(".project-image", 0.1, {
// 	// 		opacity: 0
// 	// 	}, "reveal");

// 	// // scrolling carousel animation
// 	// let tlScrolling = new TimelineMax();

// 	// tlScrolling.from(".scroll-cover", 0.5, {
// 	// 	scaleX: 0,
// 	// 	transformOrigin: "left"
// 	// })
// 	// 	.to(".scroll-cover", 1, {
// 	// 		scaleX: 0,
// 	// 		transformOrigin: "right"
// 	// 	}, "reveal")
// 	// 	.from(".scrolling-card", 0.1, {
// 	// 		opacity: 0
// 	// 	}, "reveal");

// 	// let controller = new ScrollMagic.Controller();


// 	// // 1st scene : tlImage tween executed when scrolled to .project-img-container
// 	// let imageSM = new ScrollMagic.Scene({
// 	// 	triggerElement: ".project-img-container",
// 	// 	reverse: false,
// 	// })
// 	// 	.setTween(tlImage)
// 	// 	.addTo(controller);

// 	// // 2nd scene : tlScrolling tween executed when scrolled to .scrolling-wrapper
// 	// let scrollingSM = new ScrollMagic.Scene({
// 	// 	triggerElement: ".scrolling-wrapper",
// 	// 	reverse: false,
// 	// })
// 	// 	.setTween(tlScrolling)
// 	// 	.addTo(controller);

// }