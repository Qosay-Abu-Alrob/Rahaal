import React, { useState, useEffect } from 'react';

function Counter(numberOfCount,time) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count >= numberOfCount) {
                clearInterval(interval);  
            } else {
                setCount(prevCount => prevCount + 1); 
            }
        }, time); 

        return () => clearInterval(interval); 
    }, [count,numberOfCount,time]); 

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default Counter;
