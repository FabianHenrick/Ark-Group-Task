import { GenericList } from "../components/GenercContainer";
import { TaskTamingContainer } from "./styles";

export function Home() {
  return (
    <body>
      <TaskTamingContainer>
        <GenericList listName="Lista de Tarefas" />
        <GenericList listName="Dinos para Tamar" />
      </TaskTamingContainer>
      <GenericList listName="Bases Ativas" />
      <GenericList listName="Membros" />
    </body>
  );
}
