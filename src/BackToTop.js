import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from "@mui/material/Button";

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);



  return (
    <div style={{marginBottom: "30px"}}>
      {visible && (
        <Button onClick={scrollToTop} >
          <KeyboardArrowUpIcon style={{color: "white"}} fontSize='large'/>
        </Button>
      )}
    </div>
  );
}
export default BackToTop