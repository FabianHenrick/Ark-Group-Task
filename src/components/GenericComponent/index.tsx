import { Trash } from "phosphor-react";
import { GenericContainer } from "./styles";
export function GenericComponent() {
  return (
    <GenericContainer>
      <img src="https://i.pinimg.com/474x/07/4e/1e/074e1e1f95d24184fcf628bb5b9239ad.jpg" />
      <p>Farmar bla bla bla bla</p>
      <Trash size={20} />
    </GenericContainer>
  );
}
