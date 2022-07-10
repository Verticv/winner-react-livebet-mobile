import React, { useState } from "react";
import arrow from '../../assets/images/imgs/btn-arrow.png';
import icon from '../../assets/images/imgs/true.png';

const SortBy = ({ children, options, value, onChange, onClick, multiple }) => (
    <div className="container" style={{ padding: '0' }}>
        <select
            className="select-overlay"
            id="filter-select"
            name="filter-select[]"
            value={value}
            onChange={onChange}
            onClick={onClick}
            multiple={multiple}
        >
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <label style={{ fontSize: '2.625rem' }} className="custom" htmlFor="filter-select">
            {children}
        </label>
    </div>
);

const Dropdown = ({ options, children, labelStyle, labelClasses, isLeagueSelection = false, isContact = false, multiple = false, isSignup = false }) => {
    const [sortValue, setSortValue] = useState(isContact ? "선택" : isLeagueSelection ? "리그선택" : isSignup ? options[0] : "전체회차")

    const onChange = e => setSortValue(e.currentTarget.value);

    return (
        <form style={{ width: '100%' }}>
            <SortBy
                options={options}
                value={sortValue}
                onChange={onChange}
                onClick={() => console.log('on click!')}
                multiple={multiple}
            >
                <div className="flex w-full items-center justify-between">
                    <img style={{ width: '3.3125rem', marginTop: '0.2rem', marginLeft: '0.4rem', marginRight: '0.2rem' }} src={icon} alt="icon" />
                    <div className={labelClasses} style={labelStyle}><p style={{ marginTop: "2.5rem" }}>{sortValue}</p></div>
                    <img className="white-arrow" style={{ width: '1.375rem', height: '0.6875rem' }} src={arrow} alt="arrow" />
                </div>
            </SortBy>
        </form>
    )
}


export default Dropdown;



