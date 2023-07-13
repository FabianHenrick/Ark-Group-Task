import { GenericComponent } from "../components/GenericComponent";
import {
  TittleDiv,
  BaseContainer,
  TaskTamingContainer,
  TaskList,
  AccountsList,
  BaseList,
  OnlineAccounts,
} from "./styles";

export function Home() {
  return (
    <body>
      <TaskTamingContainer>
        <TaskList>
          <TittleDiv>
            <h2>Lista de Tarefas</h2>
            <button>
              <strong>+</strong>
            </button>
          </TittleDiv>{" "}
          <div>
            <GenericComponent />
            <GenericComponent />
          </div>
        </TaskList>
        <TaskList>
          <TittleDiv>
            <h2>Dinos para Tamar</h2>
            <button>
              <strong>+</strong>
            </button>
          </TittleDiv>{" "}
          <div>
            <GenericComponent />
            <GenericComponent />
          </div>
        </TaskList>
      </TaskTamingContainer>
      <BaseContainer>
        <TaskList>
          <TittleDiv>
            <h2>Bases</h2>
            <button>
              <strong>+</strong>
            </button>
          </TittleDiv>{" "}
          <BaseList>
            <GenericComponent />
            <GenericComponent />
            <GenericComponent />
          </BaseList>
        </TaskList>
      </BaseContainer>
      <OnlineAccounts>
        <TaskList>
          <TittleDiv>
            <h2>Contas Ativas</h2>
            <button>
              <strong>+</strong>
            </button>
          </TittleDiv>{" "}
          <AccountsList>
            <GenericComponent />
            <GenericComponent />
            <GenericComponent />
            <GenericComponent />
            <GenericComponent />
            <GenericComponent />
            <GenericComponent />
            <GenericComponent />
          </AccountsList>
        </TaskList>
      </OnlineAccounts>
    </body>
  );
}
