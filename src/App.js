import logo from './logo.svg';
import './App.css';
/// Components
import Markup from "./jsx";
import { withResizeDetector } from "react-resize-detector";
const App = () => {
  return (
      <Markup />
  );
};

export default withResizeDetector(App);
