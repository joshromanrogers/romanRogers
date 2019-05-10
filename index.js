// Import Highway
import Highway from "@dogstudio/highway";

// Import Transitions
import Fade from "./js/fade.js";

// Import Renderers
import CustomRenderer from "./js/custom-renderer.js";
import NewRenderer from "./js/new-renderer.js";

// Import quicklink
import quicklink from "quicklink/dist/quicklink.mjs";

// Call Highway.Core once.
// Store it in a variable to use events
// The custom transition will be used for the page labelled by `name`.
// The other transition will be used by default for all pages with no specific transition related to them.
const H = new Highway.Core({
	renderers: {
		project: CustomRenderer,
		snaps: NewRenderer,
		mond: CustomRenderer,
	},
	transitions: {
		default: Fade
	}
});

