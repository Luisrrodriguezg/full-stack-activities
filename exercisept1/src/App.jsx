/*const Hello = (props) => {
    console.log(props)
    console.log(props, typeof props.age)
    const name = props.name
    const age = props.age

    const bornYear = () => {
        return new Date().getFullYear() - age
    }

    return (
        <div>
            <p>Hi I'm {name} and my age is {age}, i was born in {bornYear()}</p>
        </div>
    )
}

const luis = {
    name: 'Luis',
    age: 20
}
*/
import {useState} from "react";

//Display component
const DisplayCounter = (props) => {
    return (<div>El contador va en: {props.counter}</div>)
}


const App = () => {
    //Counter React Hook.
    const [count, setCount] = useState(0)

    const resetCount = () => {setCount(0)}
    const increaseCount = () => {setCount(count + 1)}
    return (<div>
        <DisplayCounter counter={count}/>
        <button onClick={() => {resetCount()}}>Reiniciar</button>
        <button onClick={() => {increaseCount()}}>Aumentar</button>
    </div>)
}
export default App;