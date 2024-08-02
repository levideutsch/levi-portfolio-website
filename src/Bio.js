import { Typography, Card } from "@mui/material";

function Bio({ isMobile }) {
  
  return (
    <Card
      style={{
        width: isMobile ? "100%" : "45%",
        height: "130%",
        margin: "0 auto",
        marginTop: "20px",
      }}
    >
      <Typography variant="body2">
        Hi, my name is Levi Deutsch. I'm a software engineer located in
        Brooklyn, NY. I'm proficient in React.js, Rails, and several other
        languages and frameworks. I have experience building full-stack
        applications for real-world wholesale companies. Additionally, I enjoy
        solving complex problems and am passionate about continuously learning
        and improving my skills.
      </Typography>
    </Card>
  );
}

export default Bio;
