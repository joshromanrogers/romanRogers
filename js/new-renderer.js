import Highway from "@dogstudio/highway";
import {
	TimelineMax,
	TweenLite
} from "gsap/TweenMax";
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import imageCover from "./image-animations.js";
import zoomOutOnScroll from "./scroll-zoom.js";

let newController;

function scrollBarHandler() {
	// adding image zoom on scroll, which manipulates the footer/next project/home image
	let nextProjectImage = document.querySelector(".next-project-img");
	let nextProjectText = document.querySelector(".next-project-text");
	zoomOutOnScroll(nextProjectImage, nextProjectText);
}

class NewRenderer extends Highway.Renderer {

	onEnterCompleted() {
		// create new scrollmagic controller
		newController = new ScrollMagic.Controller();

		// image animation
		// 1. black rectanglular div appears from left side
		// 2. once reaches its position, reveals vid behind that has become visible
		let newTlImage = new TimelineMax();

		newTlImage.from(".image-cover", 0.5, {
				scaleX: 0,
				transformOrigin: "left",
			})
			.to(".image-cover", 1, {
				scaleX: 0,
				transformOrigin: "right"
			}, "reveal")
			.from(".project-image", 0.1, {
				opacity: 0
			}, "reveal");

		// scrolling carousel animation
		// 1. black rectangular div appears from mid left side
		// 2. grows until reaches end of screen
		// 3. reveals carousel behind, which has become visible
		let newTlScrolling = new TimelineMax();

		newTlScrolling.from(".scroll-cover", 0.5, {
				scaleX: 0,
				transformOrigin: "left"
			})
			.to(".scroll-cover", 1, {
				scaleX: 0,
				transformOrigin: "right"
			}, "reveal")
			.from(".scrolling-card", 0.1, {
				opacity: 0
			}, "reveal");

		document.addEventListener("scroll", scrollBarHandler);

		// positions at which the user has to scroll in order that the GSAP animations occur
		// 1st scene : tlImage tween executed when scrolled to .project-img-container
		new ScrollMagic.Scene({
				triggerElement: ".project-img-container",
				reverse: false,
			})
			.setTween(newTlImage)
			.addTo(newController);

		// 2nd scene : tlScrolling tween executed when scrolled to .scrolling-wrapper
		new ScrollMagic.Scene({
				triggerElement: ".scrolling-wrapper",
				reverse: false,
			})
			.setTween(newTlScrolling)
			.addTo(newController);

	}
	onLeave() {

		// gsap + scrollmagic controller destroy on leaving the page
		TweenLite.defaultOverwrite = false;
		newController.destroy();
		document.removeEventListener("scroll", scrollBarHandler);

	}
	onLeaveCompleted() {}
}

export default NewRenderer;