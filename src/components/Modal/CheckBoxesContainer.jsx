import React, { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import flag1 from '../../assets/flag1.png';
import flag2 from '../../assets/flag2.png';
import flag3 from '../../assets/flag3.png';
// import white from '../../assets/white.png';

const CheckBoxes = [
  {
    id: '01',
    name: ' 예상배당',
    icon: flag1,
  },
  {
    id: '02',
    name: ' 예상배당',
    icon: flag2,
  },
  {
    id: '03',
    name: ' 예상배당',
    icon: flag3,
  },
  {
    id: '04',
    name: ' 예상배당',
    icon: flag1,
  },
  {
    id: '05',
    name: ' 예상배당',
    icon: flag2,
  },
  {
    id: '06',
    name: ' 예상배당',
    icon: flag3,
  },
  {
    id: '07',
    name: ' 예상배당',
    icon: flag1,
  },
  {
    id: '08',
    name: ' 예상배당',
    icon: flag2,
  },
];

const CheckBoxesContainer = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(CheckBoxes);
  }, [list]);

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

  const catalog = list.map(({ id, name, icon }) => (
    <>
      <Checkbox
        key={id}
        type='checkbox'
        name={name}
        id={id}
        handleClick={handleClick}
        isChecked={isCheck.includes(id)}
        icon={icon}
      />
    </>
  ));
  return (

    <div className='container' style={{}}>
      <Checkbox
        type='checkbox'
        name='selectAll'
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
