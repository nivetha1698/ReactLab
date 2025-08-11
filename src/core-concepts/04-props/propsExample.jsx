import "../../App.css"

export default function PropsExample({heading, technology}) {
    return <>
            <h4>Props Example</h4>
            <p className="bg-color">{heading} with the {technology}</p> 
        </>
    
}