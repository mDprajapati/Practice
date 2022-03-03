import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

function UseMemos() {
    const [value,setValue] = useState([]);
    const [count,setCount] = useState(0);
    useEffect(()=>{
     getList()   
    },[])

    const increment  = () => setCount(count + 1);
    function getList(){
        console.log("api call")
        axios.get(`https://localhost:44329/api/User`)
        .then(response => {
            setValue(response.data)
        }).catch(
            err => {
                throw err
            }
        )
    }
  return (
    <div>
    {count}
                <button onClick={increment}>Add</button>
        {value.map((x) => {
            return(
                <>
                    <ul>
                        <li key={x.user_id.toString()}>{x.full_name}</li>
                    </ul>
                </>
            )
        })}
    </div>
  )
}

export default UseMemos