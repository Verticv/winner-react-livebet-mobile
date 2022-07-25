import React, { useState } from "react";
import { useLayoutEffect } from "react";
import arrow from '../../assets/images/imgs/btn-arrow.png';
import icon from '../../assets/images/imgs/true.png';

const SortBy = ({ btn3, setBtn3, children, options, value, onChange, onClick, multiple }) => (
    <div className="container" style={{ padding: '0' }}>
        <select
            className="select-overlay"
            id="filter-select"
            name="filter-select[]"
            value={btn3}
            onChange={(e) => {
                onChange(e);
                setBtn3(e.target.value);
            }}
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

const Dropdown = ({ btn3, setBtn3, options, children, labelStyle, labelClasses, isLeagueSelection = false, isContact = false, multiple = false, isSignup = false }) => {
    const [sortValue, setSortValue] = useState(isContact ? "전체" : isLeagueSelection ? "진행중" : isSignup ? options[0] : "예정중")
    useLayoutEffect(() => {
        setSortValue(btn3)
    }, [btn3])

    const onChange = e => setSortValue(e.currentTarget.value);

    return (
        <form style={{ width: '100%' }}>
            <SortBy
                btn3={btn3}
                setBtn3={setBtn3}
                options={options}
                value={sortValue}
                onChange={onChange}
                multiple={multiple}
            >
                <div className="flex w-full items-center justify-between">
                    <img style={{ width: '3.3125rem', marginTop: '0.2rem', marginLeft: '0.4rem', marginRight: '0.2rem' }} src={icon} alt="icon" />
                    <div className={labelClasses} style={labelStyle}><p style={{ marginTop: "2.4rem", fontSize: '2.425rem' }}>{sortValue}</p></div>
                    <img className="white-arrow" style={{ width: '1.375rem', height: '0.6875rem', marginTop: '0.2rem' }} src={arrow} alt="arrow" />
                </div>
            </SortBy>
        </form>
    )
}


export default Dropdown;



