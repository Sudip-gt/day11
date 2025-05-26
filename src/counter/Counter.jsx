import React, { useState } from 'react'
import './counter.css'
import PropTypes from 'prop-types';

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);
    return (
        <>
            <h2 className='text-2xl font-bold text-gray-600 m-4 text-center'>Counter</h2>
            <div className='user-container mx-auto'>
                <p className='bg-blue-200 p-4 rounded m-2'>{count}</p>
                <div className='flex gap-4'>
                    <button onClick={() => { setCount(count + 1) }}>Count Increment</button>
                    <button onClick={() => { setCount(count - 1) }}>Count Decrement</button>
                </div>
            </div>
        </>
    )
}
Counter.propTypes = {
    initialCount: PropTypes.number.isRequired
}

export default Counter
