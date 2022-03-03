import React, { useCallback, useState } from "react";

var number = new Set();
function GetCallBack() {
    const [value,setValue] = useState(0);

    const increment = useCallback(() => {
        setValue(value + 1);
    },[value])
    const decrement = useCallback(() => {
        setValue(value - 1);
    },[value])
    number.add(increment);
    number.add(decrement);
    return(
        <>
            <button onClick={increment}>+</button>
            {value}
            <button onClick={decrement}>-</button>
        </>
    )
}
export default GetCallBack;