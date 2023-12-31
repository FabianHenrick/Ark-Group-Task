import { TaskTamingContainer } from "./styles";
import { BasesLister } from "../components/BasesList";
import { AccountList } from "../components/AccountList/";
import { TasksLister } from "../components/TaskList";
import { TamingLister } from "../components/TamingList";

export function Home() {
  return (
    <div>
      <TaskTamingContainer>
        <TasksLister />
        <TamingLister />
      </TaskTamingContainer>
      <BasesLister />
      <AccountList />
    </div>
  );
}
