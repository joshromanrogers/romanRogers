// onscroll function, whenever user scrolls check to see if close enough to:
// 1. on scroll down, zoom out of image
// 2. bring word link up from bottom of page

export default function zoomOutOnScroll(image, text) {
	let scrollHeight = document.documentElement.scrollHeight;
	let scrollPosition = window.innerHeight + window.pageYOffset;
	let distanceFromBottom = scrollHeight - scrollPosition;
	if ((distanceFromBottom) < 1000) {
		image.style.transform = `translate3d(0px, ${-distanceFromBottom}px, 0px)`;
		image.style.transform = `scale3d(${(distanceFromBottom/1000) + 1}, ${(distanceFromBottom/1000) + 1}, 1)`;
        text.style.transform = `translate3d(0px, ${(distanceFromBottom)}px, 0px)`;

	}
}

