import React from 'react'

function Common(myObj) {
  debugger
   const info = myObj.data.name;
  return (
    <div>
      {info != null ? <p>{info}</p> : <p>no data</p>}
    </div>
  )
}

const MainComponent = () => {
  const data = Data();
  return <Common data={data} />
}

const Data = () => {
  const obj = {
    name:null,
    email:"mamav@gmail.com"
  }
 return obj;
}
export default MainComponent