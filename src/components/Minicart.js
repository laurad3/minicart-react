import React from 'react';

import MinicartItem from './MinicartItem';
import MinicartBottom from './MinicartBottom';

const MinicartIcon = () => {
	return (
		<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.49 123.16">
			<defs>
				<style>
					{`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.5px;}`}
				</style>
			</defs>
			<title>bag</title>
			<path className="cls-1" d="M611.83,341.58,583.44,340l-4.29-.24a6.19,6.19,0,0,0-5.31,2.48c-10.36,13.92-55.72,78.08-18,85.27,42,8,93.92,10,123.9-2,0,0,15.58-5.85-20.57-77.16a5.58,5.58,0,0,0-4.51-3Z" transform="translate(-540.87 -311.09)"/><path className="cls-1" d="M585.85,339.58s6-26,26-28,31.95,7.39,31,32.67" transform="translate(-540.87 -311.09)"/><path className="cls-1" d="M604.55,341.17s-.72,32.38,13.27,34.38S629,343.07,629,343.07" transform="translate(-540.87 -311.09)"/>
		</svg>
	);
};

const Minicart = ({ items, handleTrash, handleIncrement, handleDecrement }) => {
	return (
		<div>
			<div className="minicart-menu">
				<div>Basket</div>
				<div className="basket-icon"><MinicartIcon /></div>
			</div>
			<div className="minicart">
				<ul className="minicart-items">
					{items.map(item => <MinicartItem key={item.id} item={item} handleTrash={handleTrash} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />)}
				</ul>
				<MinicartBottom items={items} />
			</div>
		</div>
	);
};

export default Minicart;