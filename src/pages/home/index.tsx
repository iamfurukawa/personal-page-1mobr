import { useState } from "react";
import AboutMe from "./about-me";
import Contact from "./contact";
import Navbar from "./navbar";
import NavbarOption from "./NavbarOptions.enum";

import { Content, Info } from "./styles";
import Technologies from "./technologies";

const Home = () => {

  const [optionSelected, setOptionSelected] = useState<NavbarOption>(NavbarOption.ABOUT_ME)

  return (
    <Content>
      <Navbar navigate={setOptionSelected}/>
      <Info>
        <img src="https://avatars.githubusercontent.com/u/32659391?s=400&u=00ec470717ab76b769ad895e010a7fe6ef7b8cb1" />
        {optionSelected === NavbarOption.ABOUT_ME && <AboutMe />}
        {optionSelected === NavbarOption.CONTACT && <Contact/>}
        {optionSelected === NavbarOption.TECHNOLOGIES && <Technologies />}
      </Info>
    </Content>
  );
};

export default Home;
