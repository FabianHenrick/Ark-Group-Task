import { GenericComponent } from "../GenericComponent";
import { OnlineAccounts } from "./styled";
import { TittleDiv } from "../../Pages/styles";
import { useState } from "react";

export function AccountList() {
  const [accounts, setNewAccount] = useState<number[]>([]);

  function handleCreateNewAccount() {
    setNewAccount([...accounts, accounts.length + 1]);
  }

  return (
    <OnlineAccounts>
      <TittleDiv>
        <h2>Contas Ativas</h2>
        <button onClick={handleCreateNewAccount}>
          <strong>+</strong>
        </button>
      </TittleDiv>
      <li>
        {accounts.map((accounts) => {
          return <GenericComponent />;
        })}
      </li>
    </OnlineAccounts>
  );
}
