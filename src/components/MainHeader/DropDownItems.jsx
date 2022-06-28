import React, { useEffect, useState } from "react";
import checkIcon from '../../assets/images/imgs/true.png';
import btnArrow from '../../assets/images/imgs/btn-arrow.png';
import arrow from '../../assets/images/imgs/aaa.png'

export default function SelectBox({ items }) {
    const [showItems, setShowItems] = useState(false);
    const [selectedItem, setSelectedItem] = useState(items[0]);
    useEffect(() => {
        const closeDropdown = (e) => {
            if ((e.path[0].className !== 'select-box--selected-item')
                && e.path[0].tagName !== 'IMG'
                && e.path[0].tagName !== 'P') {
                setShowItems(false);
            };
        };
        document.body.addEventListener('click', closeDropdown);
        return () => document.body.addEventListener('click', closeDropdown);
    }, []);

    const dropDown = () => {
        setShowItems((prevState) => !prevState);
    };

    const selectItem = (event, item) => {
        event.stopPropagation();
        setSelectedItem(item);
        setShowItems(false);
    };

    return (
        <div className="select-box--box">
            <div className="select-box--container btn">
                <div onClick={dropDown} className="select-box--selected-item">
                    <img 
                    // style={{width: '4.125rem', height: '3.25rem'}} 
                    className="icon" src={checkIcon} alt="check" />
                    <p className="text">{selectedItem.value}</p>
                    <img  className='white-arrow' 
                    // style={{ width: '2rem', height: '1rem', marginLeft: '1rem', marginTop: '1rem' }} 
                    src={showItems ? arrow : btnArrow} alt=''/>
                    <div
                        className={`select-box--arrow ${showItems ? "select-box--arrow-up" : ""
                            }`}
                    >
                    </div>
                </div>
                <div
                    style={{ display: showItems ? "block" : "none" }}
                    className={`select-box--items`}
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onClick={(event) => selectItem(event, item)}
                            className={`${selectedItem === item ? "selected" : ""
                                } select-box--item`}
                        >
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
