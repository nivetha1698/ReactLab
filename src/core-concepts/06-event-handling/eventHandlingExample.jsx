import { useState } from "react"

export default function EventHandlingExample() {
   const [message, setMessage] = useState("");

   const handleChange = (event) => {
     setMessage(event.target.value);
   }
   return <>
      <h2>Event Handling Example</h2>
      <input type="text" onChange={handleChange} placeholder="Enter your message"/>
      <p>{message}</p>
   </>
}