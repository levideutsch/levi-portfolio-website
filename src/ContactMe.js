import { FaWhatsapp } from "react-icons/fa";
import { Card, Tooltip } from "@mui/material";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"; // Import icons
import { RiArticleFill } from "react-icons/ri";




function ContactMe({isMobile}) {
    const whatsappMessage = "Hello Levi, Let's Connect!"
    const whatsappLink = `https://api.whatsapp.com/send?phone=7187575023&text=${encodeURIComponent(whatsappMessage)}`;


    const emailAddress = "levideutsch@live.com";
    const emailSubject = "Hello Levi, Let's Connect!";
    const emailBody = "Hello Levi, Let's Connect!.";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;


  return (
    <div style={{ marginBottom: "70px" }}>
      <Card
        style={{
          width: isMobile ? "100%" : "45%",
          height: "130%",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        {" "}
        <Tooltip title="WhatsApp" arrow>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <FaWhatsapp size="40" style={{color: "black"}}/>
          </a>
        </Tooltip>
        <Tooltip title="Email" arrow>
          <a href={mailtoLink} style={{ margin: "0 10px" }}>
            <MdOutlineMail size="40" style={{color: "black"}}/>
          </a>
        </Tooltip>

        <Tooltip title="Linkedin" arrow>
          <a href="https://www.linkedin.com/in/levi-deutsch/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <FaLinkedin size="40" style={{color: "black"}}/>
          </a>
        </Tooltip>
        <Tooltip title="GitHub" arrow>
          <a href="https://github.com/levideutsch?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <FaGithub size="40" style={{color: "black"}}/>
          </a>
        </Tooltip>
        <Tooltip title="Medium" arrow>
          <a href="https://medium.com/@leviyitzchokdeutsch" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <RiArticleFill size="40" style={{color: "black"}}/>
          </a>
        </Tooltip>
      </Card>
    </div>
  );
}
export default ContactMe;
