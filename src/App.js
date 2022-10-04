import "./App.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Data from "./firebaseStore/Data";

function App() {
  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
