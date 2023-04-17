import Typewriter from "typewriter-effect";
import { Content } from "./styles";

const AboutMe = () => {
  return (
    <Content>
      <Typewriter
        onInit={(typewriter) =>
          typewriter.typeString('<strong style="font-size: 50px;">Olá, sou o Vinícius.</strong>').start()
        }
      />

      <p>Tenho 26 anos, nasci na Praia Grande/SP, mas atualmente moro em Sorocaba. Vou pra baixada todos os meses pra visitar meus pais, mas não sou viciado em praia. </p>
      <p>Jogo bastante video game, ultimamente zerei Hogwarts Legacy, mas o meu top 3 jogos são God of War, Horizon e Life is Strange. </p>
      <p>Maratono uma lista enorme de séries e já perdi muito tempo assistindo Supernatural, Greys Anatomy, Friends e How I met your mother. </p>
      <p>Minhas bandas favoritas são Paramore e Linkin Park.</p>
      <p>Sou formado em ciência da computação na UFSCar Sorocaba (2019) e desde então trabalhei somente em consultorias, atualmente estou na OPUS Software e trabalho com várias tecnologias desde java backend ou com react e até flutter (e sou péssimo com design).</p>
    </Content>
  );
};

export default AboutMe;
