const trash = [...document.querySelectorAll('.trash-icon')];
const minicartItems = document.querySelector('.minicart-items');
const maxItemsDisplay = 2;

const upTo = (el, className) => {
	let parent = el.parentNode;

	while (parent.classList.contains(className) === false) {
		parent = parent.parentNode;
	}

	return parent;
};

trash.forEach(t => {
	t.addEventListener('click', function (event) {
		const that = event.target;
		const minicartItem = upTo(that, 'minicart-item');

		if (minicartItem) {
			minicartItem.classList.add('remove');
			setTimeout(() => {
				minicartItem.remove();
			}, 500);
		}
	});
});
