import { jsx } from 'react/jsx-runtime'
import './App.css'
import HelloWorld from './core-concepts/01-helloworld/HelloWorld'
import Greeting from './core-concepts/02-components/Greeting'
import GreetingClass from './core-concepts/02-components/GreetingClass'
import JSXExample from './core-concepts/03-jsx/jsxExample'
import PropsExample from './core-concepts/04-props/propsExample'
import StateExample from './core-concepts/05-State/stateExample'

function App() {
//   return <HelloWorld />
//   return <Greeting />
//   return <GreetingClass/>
//   return <JSXExample/> 
//  return <PropsExample technology="React JS" heading="Ithu oru property example"/> // as we can send as many as properties if needed.
return <StateExample/>
}



export default App
