import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';

const items = [
	{
		id: 0,
		imageUrl: 'bag',
		name: 'Bag - Cream',
		qty: 1,
		price: 500.00,
		trash: false,
	},
	{
		id: 1,
		imageUrl: 'coat',
		name: 'Coat - Blue',
		qty: 2,
		price: 1500.00,
		trash: false,
	},
	{
		id: 2,
		imageUrl: 'bag',
		name: 'Bag - Cream',
		qty: 2,
		price: 500.00,
		trash: false,
	}
];

ReactDOM.render(
	<App items={items} />, document.getElementById('root')
);
