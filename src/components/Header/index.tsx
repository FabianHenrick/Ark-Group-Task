import { HeaderContent, LogoName } from "./styles";
import ArkLogo from "../../assets/ark-logo.svg";
export function Header() {
  return (
    <HeaderContent>
      <LogoName>
        <img src={ArkLogo} />
        <h1> Ark Group Task Manager </h1>
      </LogoName>
      <div>
        <h3> Servidor:</h3>
        <input placeholder="Digite um servidor aqui"></input>
        <button type="submit">ok</button>
      </div>
    </HeaderContent>
  );
}
