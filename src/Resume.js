import LeviDeutschTechnicalResume from './resume-pdf/LeviDeutschTechnicalResume.pdf'
import { Typography } from "@mui/material";

function Resume() {
    return (
        <div>
       
        <a href={LeviDeutschTechnicalResume} target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
         
          <Typography style={{color: "white", marginTop: "10px"}}> View My Resume</Typography>
        </a>
      </div>
    )
}
export default Resume