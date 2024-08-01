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
            <br />
            adding a new row for home page in new-design-for-home-page branch
        </div>
    )
}
export default Home