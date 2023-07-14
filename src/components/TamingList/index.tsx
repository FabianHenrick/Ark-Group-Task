import { TamingList } from "./styles";
import { TittleDiv } from "../../Pages/styles";
import { useState } from "react";
import { GenericComponent } from "../GenericComponent";

export function TamingLister() {
  const [tamings, setTaming] = useState<number[]>([]);

  function handleCreateNewTaming() {
    setTaming([...tamings, tamings.length + 1]);
  }

  return (
    <TamingList>
      <TittleDiv>
        <h2>Lista de Tarefas</h2>
        <button onClick={handleCreateNewTaming}>
          <strong>+</strong>
        </button>
      </TittleDiv>
      <li>
        {tamings.map((tamings) => {
          return <GenericComponent />;
        })}
      </li>
    </TamingList>
  );
}
