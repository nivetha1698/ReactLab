import "../../App.css"
export default function JSXExample() {
 // embedded expressions
  const name = "React";
  return <>
          <h2 className="bg-color">Welcome to the {name} </h2>
          <p style={{backgroundColor: "orange", border: "1px dotted"}}> This is for testing</p>
        </>

}