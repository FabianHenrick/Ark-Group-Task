import { HeaderContent } from "./styles";
export function Header() {
  return (
    <HeaderContent>
      <h1> Ark Group Task Manager </h1>
      <div>
        <h3> Servidor:</h3>
        <input placeholder="Digite um servidor aqui"></input>
      </div>
    </HeaderContent>
  );
}
