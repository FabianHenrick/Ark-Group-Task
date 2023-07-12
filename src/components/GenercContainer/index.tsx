import { GenericContainer } from "./styles";
import { GenericComponent } from "../GenericComponent";

export function GenericList(props: any) {
  return (
    <GenericContainer>
      <div>
        <h2>{props.listName}</h2>
        <button>+</button>
      </div>
      <GenericComponent />
    </GenericContainer>
  );
}
