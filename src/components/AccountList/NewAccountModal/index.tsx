import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Content, Overlay, CloseButton } from "./styles";

interface NewAccountModalProps {
  handleSubmit: any;
}

export function NewAccountModal(newAccountModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Conta</Dialog.Title>
        <form action="">
          <input type="file"></input>
          <input type="text" placeholder="Nome da Conta"></input>
          <button type="submit" onClick={handleSubmit}>
            {" "}
            Cadastrar
          </button>
        </form>

        <CloseButton>
          <X />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  );
}
