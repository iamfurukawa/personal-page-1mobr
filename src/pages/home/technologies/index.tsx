import Typewriter from "typewriter-effect";
import { Content, Link, Links } from "./styles";

import { FaJava } from "react-icons/fa";
import { 
    SiPython, 
    SiTypescript, 
    SiFlutter, 
    SiReact, 
    SiAngular, 
    SiPostgresql, 
    SiMysql, 
    SiAmazonaws, 
    SiFirebase, 
    SiDocker 
} from "react-icons/si";

const Technologies = () => {
  return (
    <Content>
      <Typewriter
        onInit={(typewriter) =>
          typewriter
            .typeString(
              '<strong style="font-size: 50px;">Tecnologias que já estudei ou trabalhei:</strong>'
            )
            .start()
        }
      />

      <Links>
        <Link>
          <SiPython size={"2em"} />
          <p>Python</p>
        </Link>

        <Link>
          <SiTypescript size={"2em"} />
          <p>JavaScript/Typescript</p>
        </Link>

        <Link>
          <FaJava size={"2em"} />
          <p>Java</p>
        </Link>

        <Link>
          <SiFlutter size={"2em"} />
          <p>Flutter</p>
        </Link>

        <Link>
          <SiReact size={"2em"} />
          <p>React</p>
        </Link>

        <Link>
          <SiAngular size={"2em"} />
          <p>Angular</p>
        </Link>

        <Link>
          <SiPostgresql size={"2em"} />
          <p>PostgreSQL</p>
        </Link>

        <Link>
          <SiMysql size={"2em"} />
          <p>MySQL</p>
        </Link>

        <Link>
          <SiAmazonaws size={"2em"} />
          <p>AWS</p>
        </Link>

        <Link>
          <SiFirebase size={"2em"} />
          <p>Firebase</p>
        </Link>

        <Link>
          <SiDocker size={"2em"} />
          <p>Docker</p>
        </Link>
      </Links>
    </Content>
  );
};

export default Technologies;
