import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Content, Overlay, CloseButton } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../lib/axios";

const newAccountFormSchema = z.object({
  //image: z.instanceof(File),
  imgSrc: z.string(),
  name: z.string(),
});

type NewAccountFormInputs = z.infer<typeof newAccountFormSchema>;

export function NewAccountModal(props: any) {
  const { register, handleSubmit } = useForm<NewAccountFormInputs>({
    resolver: zodResolver(newAccountFormSchema),
  });

  async function handleCreateNewAccount(data: NewAccountFormInputs) {
    const { imgSrc, name } = data;

    await api.post("accounts", {
      name,
      imgSrc,
    });
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Conta</Dialog.Title>
        <form action="" onSubmit={handleSubmit(handleCreateNewAccount)}>
          <input
            type="text"
            placeholder="Digite a URL da imagem"
            //accept=".png,jpeg.jpg"
            required
            {...register("imgSrc")}
          ></input>
          <input
            type="text"
            placeholder="Nome da Conta"
            required
            {...register("name")}
          ></input>
          <button type="submit">Cadastrar</button>
        </form>
        <CloseButton>
          <X />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  );
}
