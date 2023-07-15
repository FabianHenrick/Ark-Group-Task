import { GenericComponent } from "../GenericComponent";
import { OnlineAccounts } from "./styles";
import { TittleDiv } from "../../Pages/styles";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { NewAccountModal } from "./NewAccountModal";

export function AccountList() {
  const [accounts, setNewAccount] = useState<number[]>([]);

  function handleCreateNewAccount() {
    setNewAccount([...accounts, accounts.length + 1]);
  }

  return (
    <OnlineAccounts>
      <TittleDiv>
        <h2>Contas Ativas</h2>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <strong>+</strong>
            </button>
          </Dialog.Trigger>
          <NewAccountModal />
        </Dialog.Root>
      </TittleDiv>
      <li>
        {accounts.map((accounts) => {
          return <GenericComponent />;
        })}
      </li>
    </OnlineAccounts>
  );
}
