import React from 'react';

const EditEquity = (props) => {
  console.log(props.item.id)
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white p-2 rounded'>{props.item.id}</div>
    </div>
  );
}

export default EditEquity;
