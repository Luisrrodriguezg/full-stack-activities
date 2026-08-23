import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {i} from "vite/dist/node/chunks/node.js";


const Header =(props) => {
    return(
        <div>
            <h1>{props.header}</h1>
        </div>
    )
}

const Content = (props) => {
    return(
        <div>
            <p>{props.part}</p>
            <p>{props.examples}</p>
        </div>
    )
}
const Part = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.exercises}</p>
        </div>
    )
}

const ContentLoop = (props) => {
    return(props.part.map(part => {
        return(<Part {...part} />)
    }))
}


const Total = (props) => {
    return(
        <p>Number of exercises {props.number}</p>
    )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const arto = {
        name: 'Arto Hellas',
        age: 35,
        education: 'PhD',
        greet: function() {
            console.log('hello, my name is ' + this.name)
        },
    }

    arto.growOlder = function (agePlus){
        this.age = this.age + agePlus
        console.log("This is " + this.name + " is " + this.age.toString() )
    }

    arto.greet()  // "hello, my name is Arto Hellas" gets printed
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    const parts = [part1, part2, part3];
    return (
        <div>
            <Header header = {course}/>
            <ContentLoop part={parts}/>
            <Total number={part1.exercises+part2.exercises+part3.exercises}/>
        </div>
    )
}

export default App