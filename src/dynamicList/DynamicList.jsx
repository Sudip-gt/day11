import React from 'react'

const DynamicList = ({ items }) => {
    return (
        <>
            <h2 className='text-2xl font-bold text-gray-600 m-4 text-center'>Dynamic List</h2>
            <ul className='flex flex-wrap justify-center gap-6'>
                {items.map((item) => (
                    <li key={item.id} className='bg-blue-200 p-4 rounded'>
                        {item.text}</li>
                ))}
            </ul>
        </>
    )
}

export default DynamicList
