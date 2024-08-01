import React, { useState } from "react"

function SecondTestPage() {
    const [isClicked, setIsClicked] = useState(false)


    return (
        <div>
            second test page
            adding new data to main branch
            adding MORE new data 
            <button onClick={() => setIsClicked(!isClicked)}>
                {isClicked ? "close" : "open"}
            </button>

        </div>
    )
}
export default SecondTestPage