import "./GlobalStyles.css";
import Wrapper from "./features/Wrapper";
import { DarkModeProvider } from "./features/07-dark-mode/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <div className="bg-custom-bgColor h-screen">
          <Wrapper />
        </div>
      </DarkModeProvider>
    </>
  );
}

export default App;
