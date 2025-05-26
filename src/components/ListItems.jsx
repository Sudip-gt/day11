import React, { useEffect, useRef } from 'react'

function ListItems({text}) {
  const renderCount = useRef(0);
  
  useEffect(() => {
    renderCount.current = renderCount.current + 1
    console.log(`ListItem "${text}" rendered ${renderCount.current} times`);
  });
  return (
    <>
      <li  className='bg-blue-200 p-4 rounded'>{text}</li>
    </>
  )
}

export default React.memo(ListItems);