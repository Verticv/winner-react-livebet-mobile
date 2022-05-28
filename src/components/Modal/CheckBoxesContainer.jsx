import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import spain from '../../assets/images/flags/spain.png';
import germany from '../../assets/images/flags/germany.png';
import flag3 from '../../assets/images/flags/england.png';

const CheckBoxes = [
  {
    id: '01',
    name: '라리가',
    icon: spain,
  },
  {
    id: '02',
    name: '프리미어리그',
    icon: flag3,
  },
  {
    id: '03',
    name: '분데스리가',
    icon: germany,
  },
  {
    id: '04',
    name: '라리가',
    icon: spain,
  },
  {
    id: '05',
    name: '프리미어리그',
    icon: flag3,
  },
  {
    id: '06',
    name: '분데스리가',
    icon: germany,
  },
  {
    id: '07',
    name: '라리가',
    icon: spain,
  },
  {
    id: '08',
    name: '프리미어리그',
    icon: flag3,
  },
];

const CheckBoxesContainer = ({ isCheck, setIsCheck, temp, setTemp }) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(CheckBoxes);
  }, [list]);
  
  useEffect(() => {
    if (isCheck.length === 8) {
      setIsCheckAll(true);
    }
    else {
      setIsCheckAll(false);
    }
  }, [isCheck]);

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  
  const catalog = list.map(({ id, name, icon }) =>(
      <Checkbox
        key={id}
        type='checkbox'
        name={name}
        id={id}
        handleClick={handleClick}
        isChecked={isCheck.includes(id)}
        icon={icon}
      />
  ));
  return (

    <div className='container' style={{}}>
      <Checkbox
        type='checkbox'
        name='모든 리그 선택'
        id='selectAll'
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
        style={{ height: '1px' }}
        className='all'
      />
      {catalog}
    </div>
  );
};

export default CheckBoxesContainer;
