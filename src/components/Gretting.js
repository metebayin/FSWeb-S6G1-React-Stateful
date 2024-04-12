import React, { useState } from "react";

const Gretting = () => {
    const username = "Ali";
    const userSurname= "Taş";
    const [counter, setCounter] = useState(0);

    let counterLet = 0;

    return (
    <div>
        <h1 className="greeting-header">
            Merhaba {username} {userSurname}...
            {"2"+"2"}
        </h1>
        <h3>Counter: {counter}</h3>
        <button
            onClick={() =>{
                setCounter(counter +1);
            }}
        >
        Counter artırır
        </button>
        <h3>Counter Let: {counterLet}</h3>
        <button onClick={()=> {
            counterLet++;
        }}>Counter let artırır</button>
    </div>
    );
};

export default Gretting;