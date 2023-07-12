import { GenericComponent } from "../components/GenericComponent";
import {
  TittleDiv,
  BaseContainer,
  MembersContainer,
  TaskTamingContainer,
  TaskList,
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
            <h2>Basess</h2>
            <button>
              <strong>+</strong>
            </button>
          </TittleDiv>{" "}
          <div>
            <GenericComponent />
            <GenericComponent />
          </div>
        </TaskList>
      </BaseContainer>
      <MembersContainer>
        <TaskList>
          <TittleDiv>
            <h2>Membros</h2>
            <button>
              <strong>+</strong>
            </button>
          </TittleDiv>{" "}
          <div>
            <GenericComponent />
            <GenericComponent />
          </div>
        </TaskList>
      </MembersContainer>
    </body>
  );
}
