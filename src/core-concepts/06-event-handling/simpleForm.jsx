export default function SimpleForm() {
    //onSubmit
    const handleSubmit = (event) => {
        event.preventDefault(); //usually when submitting form page get refreshed so this line avoids form resfresh
        console.log(event.target.name.value)
        console.log(event.target.email.value)
    }
    
    //onClick
    const displayDate = (event) => {
      document.getElementById("demo").innerHTML = Date();
    }
    
  return <>
    <h1>Simple form</h1>
    <button onClick={displayDate}>The time is?</button>
    <p id="demo"></p>

    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name"/><br/><br/>
        <input type="text" name="email" placeholder="Enter your Email"/><br/><br/>
        <button type="Submit" className="bg-color">Submit</button>
    </form>
  </>
}