import NavbarOption from "../NavbarOptions.enum";
import { Content, Items } from "./styles";

interface NavbarParam {
  navigate: Function;
}

const Navbar = (params: NavbarParam) => {
  const { navigate } = params;

  return (
    <Content>
      <h1>Vinícius Furukawa Carvalho</h1>

      <Items>
        <h2 onClick={() => navigate(NavbarOption.ABOUT_ME)}>Sobre</h2>
        <h2 onClick={() => navigate(NavbarOption.TECHNOLOGIES)}>Tecnologias</h2>
        <h2 onClick={() => navigate(NavbarOption.CONTACT)}>Contato</h2>
      </Items>
    </Content>
  );
};

export default Navbar;
