import React from 'react';
import './App.css';


//FUNCTIONAL COMPONENT 
// function App() {
//   return (
//     <div className="App">
//       <h1>Coders Never Quit</h1>
//     </div>
//   );
// }

//? WAYS TO MAKE A FUNCTIONAL COMPONENT
// function example(){ return( <div></div> )}
// const example = () => { return( <div></div> ) }


//!   PROPS CONCEPT ------------------------------------- START --------------------------------------
//?   functional component  -----------------------------------------------
const Coder = (props) => {
  return (
    <div>
      <h1>{ props.name }</h1>
      <h2>{ props.status }</h2>
      <h3>{ props.children }</h3>
    </div>
  )
}

//* CONVERTING ABOVE FUNCTIONAL COMPONENT IN CLASS BASED COMPONENT
// we don't need to pass porps in class based component ..we only have to use this. when using props variables
//?   class based compnent  ----------------------------------------------------
// class Coder extends React.Component{
//   render() {
//     return (
//       <div>
//         <h1>{ this.props.name }</h1>
//         <h2>{ this.props.status }</h2>
//       </div>
//     )
//   }
// }
//CLASS BASE COMPNENT

//! PROPS CONCEPT ------------------------------------- ENDS --------------------------------------



class App extends React.Component{

  state = {
    title: "Haris"
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(res2 => console.log(res2))
  }

//  changeName = (name) => {
    changeName(name) {
    this.setState({
      // title: "Bilal"
      title: name
    })
  }

  render() {

    // const arr = ['eat', 'sleep', 'code'];
    // const data = arr.map(item => {
    //   return <h2>{ item }</h2>
    // })

    return(
      <div className="App">
      
{/* JSX SYNTAX EXAMPLE ...JSX is basically a mixture of javascript and html
      <h1>Coders Never Quit</h1>
      <h2>{Math.random()}</h2> */}

{/* ARRAY MAPPING ....USING DYNAMIC DATA
      { data } */}

{/* REUSEABILITY OF COMPONENT
      <Coder />
      <Coder /> */}
      
{/* PROPS CONCEPT
      <Coder name="Haris" status="Coder"/>
      <Coder name="Hummam" status="SQA"> Resigning </Coder>
      <Coder name="MD" status="Laravel"/>
      <Coder name="Bilal" status="FIFA"/> */}
    
{/* STATE CONCEPT */}
    <h1>{ this.state.title }</h1>
    <button onClick={()=> { this.changeName("Muqtada") }}>Change Name</button>

    {/* <button onClick={this.changeName.bind(this, "Muqtada") }>Change Name by arrow function</button> */}    
    
    </div>
    );
  }
}

export default App;
