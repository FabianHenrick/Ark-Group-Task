import { Trash } from "phosphor-react";
import { GenericContainer } from "./styles";
export function GenericComponent(props:any) {
  return (
    <GenericContainer>
      <img src={props.} />
      <div>
        <p> Dinosfauro</p>
        <button>
          <Trash size={20} />
        </button>
      </div>
    </GenericContainer>
  );
}
