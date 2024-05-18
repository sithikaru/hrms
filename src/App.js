import logo from './logo.svg';
import './App.css';
import SideBar from './components/sideBar';
import Dashboard from './components/dashboard';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA] text-[#122262] ">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6 flex-1 overflow-y-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
