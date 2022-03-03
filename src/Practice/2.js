import React from 'react'

function Closure() {
  let name = 'Malav';
  const innerFunction = () => {
    let email = 'malav@gmail.com'
    console.log(name);
    console.log(email);
  }
  innerFunction()
  console.log(name);
  // console.log(email);
  return (
    <div>Closure</div>
  )
}

export default Closure