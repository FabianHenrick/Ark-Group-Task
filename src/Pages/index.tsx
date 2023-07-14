import { TaskTamingContainer } from "./styles";
import { BasesList } from "../components/BasesList";
import { BaseContainer } from "../components/BasesList/styled";
import { AccountList } from "../components/AccountList/";
import { TasksLister } from "../components/TaskList";
import { TamingLister } from "../components/TamingList";

export function Home() {
  return (
    <body>
      <TaskTamingContainer>
        <TasksLister />
        <TamingLister />
      </TaskTamingContainer>
      <BaseContainer>
        <BasesList />
      </BaseContainer>
      <AccountList />
    </body>
  );
}
