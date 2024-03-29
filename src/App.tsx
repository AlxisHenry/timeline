import "./App.css";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App">
      <Timeline 
        title="Latest repositories updated" 
        limit={10}
        order="DESC"
      />
    </div>
  );
}

export default App;
