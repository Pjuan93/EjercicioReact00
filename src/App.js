import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
import TaskListComponent from './components/container/task..list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name=" juan"></Greeting> */}
        <TaskListComponent></TaskListComponent>

      </header>
    </div>
  );
}

export default App;
