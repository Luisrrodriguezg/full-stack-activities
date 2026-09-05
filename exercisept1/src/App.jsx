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
const DisplayCounter = ({count}) => {
    return (<div>El contador va en: {count}</div>)
}

const Buttonnnn = (props) => {
    return (<button onClick={props.onClick}>{props.text}</button>)
}


const App = () => {
    //Counter React Hook.
    const [count, setCount] = useState(0)
    console.log('rendering with counter value', count)

    const resetCount = () => {setCount(0)
        console.log('resetting to zero, value before', count)
    }
    const increaseCount = () => {setCount(count + 1)
        console.log('increasing, value before', count)
    }

    const decreaseCount = () => {setCount(count - 1)
        console.log('increasing, value before', count)
    }
    return (<div>
        <DisplayCounter counter={count}/>
        <Buttonnnn onClick={resetCount} text="Reset"/>
        <Buttonnnn onClick={increaseCount} text="Increase"/>
        <Buttonnnn onClick={decreaseCount} text="Decrease"/>
    </div>)
}
export default App;