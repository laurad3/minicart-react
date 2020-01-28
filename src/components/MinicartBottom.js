import React from 'react';

const getSum = (items) => {
	let sum = 0;

	items.forEach(item => {
		sum += item.price * item.qty
	});

	return sum;
};

const MinicartActions = () => {
	return (
		<div className="minicart-actions">
			<button className="btn"><span className="btn__text">View Basket</span></button>
			<button className="btn"><span className="btn__text">Checkout</span></button>
		</div>
	);
};

const Totals = ({ sum }) => {
	return (
		<div className="minicart-totals">
			<span>Total</span>
			<span>${Number(sum).toFixed(2)}</span>
		</div>
	);
};

const EmptyCart = () => {
	return (
		<div className="minicart-notification">
			<span>Cart is empty.</span>
		</div>
	);
}

const MinicartBottom = ({ items }) => {
	const sum = getSum(items);

	if (sum === 0) {
		return (
			<EmptyCart />
		);
	}

	return (
		<div>
			<Totals sum={sum} />
			<MinicartActions />
		</div>
	);
};

export default MinicartBottom;