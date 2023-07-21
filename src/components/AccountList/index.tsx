import { GenericComponent } from "../GenericComponent";
import { OnlineAccounts } from "./styles";
import { TittleDiv } from "../../Pages/styles";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { NewAccountModal } from "./NewAccountModal";

interface Account {
  id: number;
  name: string;
  imSrc: string;
  isActive: boolean;
}

export function AccountList() {
  const [accounts, setAccounts] = useState<any[]>([]);

  async function loadAcctions() {
    fetch("http://localhost:3000/accounts")
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data);
      });
  }
  useEffect(() => {
    loadAcctions();
  }, []);

  function handleCreateNewAccount() {
    setAccounts([...accounts, accounts.length + 1]);
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
          <NewAccountModal handleAcccountSubmit={handleCreateNewAccount} />
        </Dialog.Root>
      </TittleDiv>
      <li>
        {accounts.map((accounts) => {
          return (
            <GenericComponent
              key={accounts.id}
              name={accounts.name}
              imgSrc="https://qph.cf2.quoracdn.net/main-qimg-c803e5912e045867b4e2f033c1b57ff9-lq"
            />
          );
        })}
      </li>
    </OnlineAccounts>
  );
}
