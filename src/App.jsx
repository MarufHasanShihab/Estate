import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
