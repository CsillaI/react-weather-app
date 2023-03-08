import "./App.css";
import Weather from "./Weather";
import Author from "./Author";

export default function App() {
  return (
    <div className="App">
      <div>
        <Weather city="Cluj-Napoca" />
        <Author />
      </div>
    </div>
  );
}
