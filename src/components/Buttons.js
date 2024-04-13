import React, { useState } from 'react';
import Datas from '../pages/Data/Data';

function Buttons({ menuItems, filterItems, setItems }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (val) => {
        setSelectedItem(val);
        filterItems(val);
    };

    return (
        <div className='flex justify-center'>
            <button
                className={`text-lg font-semibold m-5 p-2 text-black rounded-3xl h-12 w-24 flex-grow border-none cursor-pointer ${selectedItem === null ? 'bg-teal-500' : ''
                    }`}
                onClick={() => {
                    setSelectedItem(null);
                    setItems(Datas);
                }}
            >
                All
            </button>
            {menuItems.map((val) => (
                <button
                    key={val}
                    className={`text-lg font-semibold m-5 p-2 text-black rounded-3xl h-12 w-24 flex-grow border-none cursor-pointer ${selectedItem === val ? 'bg-teal-500' : ''
                        }`}
                    onClick={() => handleItemClick(val)}
                >
                    {val}
                </button>
            ))}
        </div>
    );
}

export default Buttons;
