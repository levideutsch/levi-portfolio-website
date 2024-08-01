import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            levi portfolio home page
            <br />
            <Link to="/test-page">Go To Test</Link>
            <br />
            <Link to="/second-test-page">Go To Second Test</Link>
            <br />
            this is me adding new data to home page 
        </div>
    )
}
export default Home