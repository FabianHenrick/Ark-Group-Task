import { Trash } from "phosphor-react";
import { GenericContainer } from "./styles";

interface GenericComponentProps {
  imgSrc?: string;
  name: string;
  isActive?: boolean;
}

export function GenericComponent(props: GenericComponentProps) {
  return (
    <GenericContainer>
      <img src={props.imgSrc} />
      <div>
        <p>{props.name}</p>
        <button>
          <Trash size={20} />
        </button>
      </div>
    </GenericContainer>
  );
}
