import { Card, Tooltip } from "@mui/material";
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
import { VscJson } from "react-icons/vsc";
import { GrHeroku } from "react-icons/gr";


function Skills({ isMobile }) {



  return (
    <Card
      style={{
        width: isMobile ? "100%" : "45%",
        height: "130%",
        margin: "0 auto",
        marginTop: "20px",
      }}
    >
      {" "}
      <Tooltip title="JavaScript" arrow>
        <span>
          <FaJsSquare size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
      <Tooltip title="HTML" arrow>
        <span>
          <FaHtml5 size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
      <Tooltip title="React" arrow>
        <span>
          <FaReact size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
      <Tooltip title="Ruby" arrow>
        <span>
          <DiRuby size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
      <Tooltip title="Rails" arrow>
        <span>
          <SiRubyonrails size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
      <Tooltip title="Python/Django/Flask" arrow>
        <span>
          <FaPython size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
      <Tooltip title="PostgreSQL" arrow>
        <span>
          <SiPostgresql size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
      <Tooltip title="Git/GitHub" arrow>
        <span>
          <FaGithub size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
      <Tooltip title="Json" arrow>
        <span>
          <VscJson size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
      <Tooltip title="Heroku" arrow>
        <span>
          <GrHeroku size="40" style={{ margin: "0 10px" }} />
        </span>
      </Tooltip>
    </Card>
  );
}

export default Skills;
