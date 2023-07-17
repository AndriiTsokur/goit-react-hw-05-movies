const scrollSectionToTop = () => {
	const section = document.querySelector('section').getBoundingClientRect();
	window.scroll({
		top: section.top,
		left: 0,
		behaviour: 'smooth',
	});
};

export default scrollSectionToTop;
