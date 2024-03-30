import React from 'react';

import { increment } from '../component/action/counter.action';
import { useDispatch, useSelector } from 'react-redux';


function Counter(props) {

    const cod = useSelector( state => state.count)
    console.log(cod);

 const dispatch = useDispatch();
const handleinc = () => {
    dispatch(increment())
}
const handledec = () => {
    
}
    
    return (
        <div>
            <button onClick={handleinc}>+</button>
            { cod.count}
            <button onClick={handledec}>-</button>
            
        </div>
    );
}

export default Counter;