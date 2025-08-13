import { useState } from "react"

export default function ListExample() {
    const items = ['Kiwi', 'Lemon', 'Mango']
    return <>
      <h2>List Example</h2>
      <ul>
        { items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
}