import { ThemeProvider } from "styled-components";
import { BaseList } from "./components/BaseList";
import { Header } from "./components/Header";
import { Members } from "./components/Members";
import { TamingList } from "./components/TamingList";
import { TaskList } from "./components/TaskList";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <body>
        <div>
          <TaskList />
          <TamingList />
        </div>
        <BaseList />
        <Members />
      </body>
    </ThemeProvider>
  );
}
