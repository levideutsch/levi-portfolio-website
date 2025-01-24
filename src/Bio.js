import { Typography, Card, Box } from "@mui/material";

function Bio() {
  
  return (

    <Box
      sx={{
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        mt: 10
      }}
    >
      <Typography
        variant="h5"
        sx={{  pb: { xs: 2, lg: 2} }}
      >
        About Me
      </Typography>
      <Card
        sx={{
          width: { xs: "100%", lg: "45%"},
          height: "auto",
          display: "flex", alignItems: "center", justifyContent: "center",
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
    </Box>
  );
}

export default Bio;
