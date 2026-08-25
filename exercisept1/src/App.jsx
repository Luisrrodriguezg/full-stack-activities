const Hello = (props) => {
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

const App = () => {
    return (<Hello name={luis.name} age={luis.age} />)
}
export default App;