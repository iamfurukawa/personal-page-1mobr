import Typewriter from "typewriter-effect";
import { Content, Link, Links } from "./styles";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Content>
      <Typewriter
        onInit={(typewriter) =>
          typewriter
            .typeString(
              '<strong style="font-size: 50px;">Onde me encontrar:</strong>'
            )
            .start()
        }
      />

      <Links>
        <Link>
          <BsLinkedin size={"2em"} />
          <p>https://www.linkedin.com/in/iamfurukawa/</p>
        </Link>

        <Link>
          <AiOutlineMail size={"2em"} />
          <p>vinicius_furuka@hotmail.com.br</p>
        </Link>

        <Link>
          <BsInstagram size={"2em"} />
          <p>https://www.instagram.com/iamvinifurukawa/</p>
        </Link>
      </Links>
    </Content>
  );
};

export default Contact;
