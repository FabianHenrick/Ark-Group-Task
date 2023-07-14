import { useState } from "react";
import { GenericComponent } from "../GenericComponent";
import { TittleDiv } from "../../Pages/styles";
import { BaseList } from "./styles";

export function BasesLister() {
  const [bases, setBases] = useState<number[]>([]);

  function handleCreateNewBase() {
    setBases([...bases, bases.length + 1]);
  }

  return (
    <BaseList>
      <TittleDiv>
        <h2>Bases</h2>
        <button onClick={handleCreateNewBase}>
          <strong>+</strong>
        </button>
      </TittleDiv>
      <li>
        {bases.map((bases) => {
          return <GenericComponent />;
        })}
      </li>
    </BaseList>
  );
}
