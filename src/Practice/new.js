import { Button } from 'antd'
import React from 'react'

function New() {
  const [value,setValue] = React.useState(1);
  // eslint-disable-next-line no-unused-vars
  const [name,setName] = React.useState('malav');
  const increment = () => setValue((value) + 1);
  return (
    <div>
      <NewComponent name={name} />
      <Button type='primary' onClick={increment}>Add</Button>{value}
    </div>
  )
}
export default New
const NewComponent = React.memo(({name})=> {
  console.log("render " + name);
  return (
    <>
      {name}  
    </>
  )
})