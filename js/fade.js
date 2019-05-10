import Highway from "@dogstudio/highway";
import { TimelineMax, TweenMax, Power4 } from "gsap";

class Fade extends Highway.Transition {
	in ({
		from,
		to,
		done
	}) {
		// Reset Scroll
		window.scrollTo(0, 0);

		// Remove Old View
		from.remove();

		// new timeline, moves full screen size div across on the x axis
		let tl = new TimelineMax({onComplete: done});
		tl.fromTo(".transition-cover", 1.5, {x: "100%", ease: Power4.easeOut}, {x: "200%", ease: Power4.easeIn});		

	}

	out({
		from,
		done
	}) {

		// new timeline, moves full screen size div across on the x axis
		let tlOut = new TimelineMax({onComplete: done});
		tlOut.fromTo(".transition-cover", 1.5, {x: "0%", ease: Power4.easeOut}, {x: "100%", ease: Power4.easeIn});

	
	}
}

export default Fade;