import React from "react"
function TestPage() {
    const [ha, setHa] = React.useState(true)
    return (
        <div>
            this is the test component 
            new line created 
            <button onClick={() => setHa(!ha)}>{ha ? "its true" : "its false"}</button>
        </div>
    )
}
export default TestPage