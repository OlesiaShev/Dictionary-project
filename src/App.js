import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
      </div>
      <p className="mt-5 text-muted">
        <small>
          Coded by Olesia Shevchenko.{" "}
          <a
            href="https://github.com/OlesiaShev/Dictionary-project"
            target="_blank"
          >
            Code is open soure.
          </a>
        </small>
      </p>
    </div>
  );
}

export default App;
