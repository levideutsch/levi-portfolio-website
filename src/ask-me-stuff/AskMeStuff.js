import { FaQuestionCircle } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Tooltip } from '@mui/material';
import { useState, useEffect } from "react";
import Questions from "./Questions";

function AskMeStuff() {
    const [clicked, setClicked] = useState(false);
    const [wiggle, setWiggle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWiggle(true);
            setTimeout(() => setWiggle(false), 6000); 
        }, 1000); 

        return () => clearTimeout(timer); 
        
    }, []);

    const styles = {
        desktop: {
            position: "fixed",
            left: "10px",
            top: "5%",
            transform: "translateY(-50%)",
            display: "block",
        },
        icon: {
            margin: "0 10px",
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            color: "white",
            animation: wiggle ? "wiggle 1s ease infinite" : "none",
        },
        button: {
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            color: "white",
        },
        hoverStyle: {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        }
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <style>
                {`
                @keyframes wiggle {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    40% {
                        transform: rotate(-40deg);
                    }
                    65% {
                        transform: rotate(10deg);
                    }
                    85% {
                        transform: rotate(-40deg);
                    }
                }
                `}
            </style>
            <div style={isMobile ? styles.mobile : styles.desktop}>
                <Tooltip title="Ask Me Stuff" arrow>
                    <Button 
                        style={styles.button}
                        onMouseOver={(e) => e.currentTarget.style.transform = styles.hoverStyle.transform}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                        onClick={() => setClicked(true)}
                    >
                        <FaQuestionCircle 
                            size="40" 
                            style={styles.icon}
                        />
                    </Button>
                </Tooltip>
                <Questions clicked={clicked} setClicked={setClicked}/>
            </div>
        </>
    );
}

export default AskMeStuff;
