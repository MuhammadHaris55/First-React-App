import React from 'react';


const About = (props) => {

//? routing through props object
  // setTimeout(()=>{
  //   props.history.push("/")
  // },3000)


  return (
    <div>
      <h1>I am About page</h1>

{/* onclick routing */}
      <button onClick={() => { props.history.push('/')}}>lets navigate</button>

    </div> 
   );
}
  export default About;