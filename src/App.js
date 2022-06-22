import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from "./Create";
import Login from "./Login";
import Protected from "./Protected";
import PrptectedRoute from "./PrptectedRoute";
import Qa from "./Qa";
import Update from "./Update";
const App = () => {
  const QA = 'QA';
  const Puclic = 'public';
  return (
    <>
      <Protected role={Puclic} />
      <Protected role={QA} />
    </>
  )
}

export default App