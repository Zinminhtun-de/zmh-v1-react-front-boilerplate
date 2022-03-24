import { BrowserRouter as Router } from "react-router-dom";
import RouteUI from "./routes/RouteUI";

function App() {
  return (
    <>
      <Router>
        <RouteUI />
      </Router>
    </>
  );
}

export default App;
