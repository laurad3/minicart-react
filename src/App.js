import React, { useState } from 'react';
import Minicart from './components/Minicart';

const upTo = (el, className) => {
    let parent = el.parentNode;

    while (parent.classList.contains(className) === false) {
        parent = parent.parentNode;
    }

    return parent;
};

const App = ({ items }) => {
    const [minicartItems, setMinicartItems] = useState(items);

    const handleTrash = (e) => {
        // trigger animation
        const parent = upTo(e.target, 'minicart-item');
        const id = Number(parent.dataset.id);
        let updatedItems = [...minicartItems];

        updatedItems.forEach(item => {
            if (item.id === id) {
                item.trash = true;
            }
        });

        setMinicartItems(updatedItems);

        // remove item
        setTimeout(() => {
            const newItems = minicartItems.filter(item => item.id !== id);
            setMinicartItems(newItems);
        }, 400);
    };

    const handleIncrement = (e) => {
        const parent = upTo(e.target, 'minicart-item');
        const id = Number(parent.dataset.id);
        let updatedItems = [...minicartItems];

        updatedItems.forEach(item => {
            if (item.id === id) {
                item.qty++;
            }
        });

        setMinicartItems(updatedItems);
    };

    const handleDecrement = (e) => {
        const parent = upTo(e.target, 'minicart-item');
        const id = Number(parent.dataset.id);
        let updatedItems = [...minicartItems];

        updatedItems.forEach(item => {
            if (item.id === id && item.qty !== 1) {
                item.qty--;
            }
        });

        setMinicartItems(updatedItems);
    };

    return (
        <div>
            <div>
                <Minicart items={minicartItems} handleTrash={handleTrash} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
            </div>
        </div>
    );
};

export default App;
