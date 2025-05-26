
import Button from './components/button'
import Card from './components/card'
import ListItems from './components/ListItems'
import Counter from './counter/counter'
import DynamicList from './dynamicList/dynamicList'
import './index.css'
function App() {
  const handleEvent = (msg) => {
    alert(msg)
  }

  const items = [
    {id: 1, text: "item 1"},
    {id: 2, text: "item 2"}, 
    {id: 3, text: "item 3"},
    {id: 4, text: "item 4"},
    {id: 5, text: "item 5"}
  ];

  return (
    <>
      <div>
        <h1 className="title text-3xl font-bold text-blue-600 m-4 text-center">First React Project</h1>
        <h2 className="text-2xl font-bold text-gray-600 m-4 text-center">Reusable components and props passing demo</h2>
      </div>
      <div className='flex justify-evenly items-center gap-6 bg-gray-200'>
        <div className='flex flex-col gap-4'>
          <Button click="button 1" label="button 1" onClick={() => handleEvent("button 1 clicked")}/>
          <Button click="button 2" label="button 2" onClick={() => handleEvent("button 2 clicked")}/>
        </div>
        <div className='flex flex-col gap-4'>
          <Card title="title 1" content="your content"/>
          <Card title="title 2" content="your content"/>
        </div>
        <div className='flex flex-col gap-4'>
          {/* change the text in one or two of the list items to see the React.memo in action */}
          <ListItems text="list item 1"/>       
          <ListItems text="list item 2"/>
          <ListItems text="list item 3"/>
        </div>
      </div>
      <Counter initialCount= {0} />
      <DynamicList items={items} />
    </>
  )
}

export default App
