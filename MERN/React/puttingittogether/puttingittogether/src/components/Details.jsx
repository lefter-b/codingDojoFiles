import { useState } from "react";

const Details = (props) => {
    const [age, setAge] = useState(props.age);

    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {age}</p>
            <p>hair Color: {props.hair}</p>
            <button onClick={() => setAge(age + 1)}>Birthday button for {props.initialname}</button>
        </div>
        
    );
}
export default Details;
