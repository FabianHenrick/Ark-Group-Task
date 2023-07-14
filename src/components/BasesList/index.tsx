import { useState } from "react";
import { GenericComponent } from "../GenericComponent";
import { TittleDiv } from "../../Pages/styles";
import { BaseList } from "./styled";

export function BasesList() {
  const [bases, setBases] = useState<number[]>([]);

  function handleCreateNewBase() {
    setBases([...bases, bases.length + 1]);
  }

  return (
    <div>
      <TittleDiv>
        <h2>Bases</h2>
        <button onClick={handleCreateNewBase}>
          <strong>+</strong>
        </button>
      </TittleDiv>
      <BaseList>
        {bases.map((bases) => {
          return <GenericComponent />;
        })}
      </BaseList>
    </div>
  );
}
