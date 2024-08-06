import { FaQuestionCircle } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Tooltip  } from '@mui/material';


import { useState } from "react";
import Questions from "./Questions";


function AskMeStuff() {
    const [clicked, setClicked] = useState(false)
    const styles = {
        desktop: {
            position: "fixed",
            left: "10px",
            top: "5%",
            transform: "translateY(-50%)",
            display: "block",
        },
        mobile: {
            display: "none",
        },
    };

    const cardStyle = {
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        color: "white"
    };
    
    const hoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <div style={isMobile ? styles.mobile : styles.desktop}>
            <Tooltip title="Ask Me Stuff" arrow>
            <Button 
            style={cardStyle}
            onMouseOver={(e) => e.currentTarget.style.transform = hoverStyle.transform}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
            onClick={() => setClicked(true)}
            >
                <FaQuestionCircle size="40" style={{ margin: "0 10px" }} />
            </Button>
            </Tooltip>

            <Questions clicked={clicked} setClicked={setClicked}/>
        </div>
    );
}
export default AskMeStuff