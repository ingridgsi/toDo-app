import "./GlobalStyles.css";
import Wrapper from "./features/Wrapper";
import { DarkModeProvider } from "./features/07-dark-mode/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Wrapper />
      </DarkModeProvider>
    </>
  );
}

export default App;
