import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Content, Overlay, CloseButton } from "./styles";

export function NewAccountModal(props: any) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Conta</Dialog.Title>
        <form action="">
          <input type="file"></input>
          <input type="text" placeholder="Nome da Conta"></input>
          <button type="submit" onClick={props.handleSubmit}>
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
