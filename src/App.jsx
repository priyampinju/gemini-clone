import MainComp from "./components/MainComp";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainComp />
    </div>
  );
}

export default App;
