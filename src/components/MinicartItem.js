import React from 'react';

import Bag from '../images/bag.png';
import Coat from '../images/coat.png';

const TrashIcon = () => {
	return (
		<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.66 238">
			<defs>
				<style>
					{`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.5px;}`}
				</style>
			</defs>
			<title>trash-3</title>
			<path className="cls-1" d="M900.58,267.68c-8.61-6.16-10.22-15.69-3.85-23.11,9.25-10.77,29.85-24.75,74.19-23.49,71.35,2,81.95,14.68,84.07,27.33s3.53,34.42-66.41,33.91C936.42,281.94,913.73,277.06,900.58,267.68Z" transform="translate(-892.25 -195.75)"/><path className="cls-1" d="M892.5,264.66l18.41,151.68a19.5,19.5,0,0,0,19.36,17.16h88.48a19.49,19.49,0,0,0,18.72-14c5.72-19.64,14.17-65.57,18.19-170.4" transform="translate(-892.25 -195.75)"/><path className="cls-1" d="M947.6,251.2V200.56s46.63,2,63.59-4.56v58.24" transform="translate(-892.25 -195.75)"/><line className="cls-1" x1="41.55" y1="120.62" x2="48.42" y2="204.41"/><line className="cls-1" x1="87.14" y1="102.11" x2="87.14" y2="209.49"/><line className="cls-1" x1="126.25" y1="120.75" x2="121.25" y2="204.75"/>
		</svg>
	);
};

const MinicartItem = ({ item, handleTrash, handleIncrement, handleDecrement }) => {
	return (
		<li className={`minicart-item ${item.trash ? 'remove' : ''}`} data-id={item.id}>
			<div className="item__image-wrapper">
				<img src={item.imageUrl === 'bag' ? Bag : Coat } alt={item.name} className="item__image" />
			</div>
			<div className="item__content-wrapper">
				<div className="item__top-content">
					<div className="item__title">{item.name}</div>
					<div className="trash-icon" onClick={handleTrash}>
						<TrashIcon />
					</div>
				</div>
				<div className="item__bottom-content">
					<div className="item__qty">
						<button className="btn btn--qty" onClick={handleDecrement}>
							<span className="qty__icon qty__icon--decrease" >-</span>
						</button>
						<span className="qty">{item.qty}</span>
						<button className="btn btn--qty" onClick={handleIncrement}>
							<span className="qty__icon qty__icon--increase" >+</span>
						</button>
					</div>
					<div className="item__price">${Number(item.price).toFixed(2) * item.qty}</div>
				</div>
			</div>
		</li>
	);
}

export default MinicartItem;