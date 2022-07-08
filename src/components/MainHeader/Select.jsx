import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import arrow from '../../assets/images/imgs/btn-arrow.png';
import icon from '../../assets/images/imgs/true.png';

export default function ControlledOpenSelect({ handleOpen, handleClose, handleChange, open, setOpen, age, setAge }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img className='icon' onClick={handleOpen} src={icon} alt="" />
            <FormControl>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value='전체'>전체</MenuItem>
                    <MenuItem value='진행중'>진행중</MenuItem>
                    <MenuItem value='예정중'>예정중</MenuItem>
                </Select>
            </FormControl>
            <img style={{ marginRight: '0.3rem', marginTop: '0.4rem' }} className='white-arrow' onClick={handleOpen} src={arrow} alt="" />
        </div>
    );
}