import "./App.css";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App">
      <Timeline 
        title="Latest repositories updated" 
        limit={10}
        order="DESC"
        token="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"
      />
    </div>
  );
}

export default App;
