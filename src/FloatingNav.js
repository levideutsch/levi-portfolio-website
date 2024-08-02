import React from 'react';
import { Home } from '@mui/icons-material';
import { IconButton, Paper, Tooltip } from '@mui/material';
import { GiSkills } from "react-icons/gi";
import GridViewIcon from '@mui/icons-material/GridView';
import { IoDocumentText } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";

const FloatingNav = ({ onNavClick, bioRef, skillsRef, portfolioRef, resumeRef, contactRef }) => {
  return (
    <Paper
      elevation={3}
      style={{
        position: 'fixed',
        bottom: '10px',
        left: '50%', // Center horizontally
        transform: 'translateX(-50%)', // Adjust positioning
        backgroundColor: '#333333', // Change this to your chosen color
        width: 'auto',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        padding: '0 10px', // Add padding for spacing
        zIndex: 1000, // Ensures it's on top of other elements
      }}
    >
        <Tooltip title="Home" arrow>
        <IconButton style={{ color: 'white', margin: '0 5px' }} onClick={() => onNavClick(bioRef)}>
        <Home />
      </IconButton>
        </Tooltip>

        <Tooltip title="Skills" arrow>
        <IconButton style={{ color: 'white', margin: '0 5px' }} onClick={() => onNavClick(skillsRef)}>
        <GiSkills />
      </IconButton>
        </Tooltip>

        
        <Tooltip title="Portfolio" arrow>
        <IconButton style={{ color: 'white', margin: '0 5px' }} onClick={() => onNavClick(portfolioRef)}>
        <GridViewIcon />
      </IconButton>
        </Tooltip>

        <Tooltip title="Resume" arrow>
        <IconButton style={{ color: 'white', margin: '0 5px' }} onClick={() => onNavClick(resumeRef)}>
        <IoDocumentText />
      </IconButton>
        </Tooltip>
    
        <Tooltip title="Contact" arrow>
        <IconButton style={{ color: 'white', margin: '0 5px' }} onClick={() => onNavClick(contactRef)}>
        <IoIosContact />
        </IconButton>
        </Tooltip>
    </Paper>
  );
};

export default FloatingNav;
