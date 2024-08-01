import { Card } from "@mui/material";
import "@fontsource/roboto-mono"; // Import the font
import {
  FaReact,
  FaJsSquare,
  FaPython,
  FaHtml5,
  FaGithub,
} from "react-icons/fa"; // Import icons
import { DiRuby } from "react-icons/di";
import { SiRubyonrails, SiPostgresql } from "react-icons/si";

function Skills() {
    return (

        <Card
          style={{
            width: "45%",
            height: "130%",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          {" "}
          <FaJsSquare size="40" style={{ margin: "0 10px" }} />
          <FaReact size="40" style={{ margin: "0 10px" }} />
          <DiRuby size="40" style={{ margin: "0 10px" }} />
          <SiRubyonrails size="40" style={{ margin: "0 10px" }} />
          <FaPython size="40" style={{ margin: "0 10px" }} />
          <FaHtml5 size="40" style={{ margin: "0 10px" }} />
          <SiPostgresql size="40" style={{ margin: "0 10px" }} />
          <FaGithub size="40" style={{ margin: "0 10px" }} />
        </Card>

    )
}
export default Skills