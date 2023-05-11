import { Outlet } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

export const MainLayout = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  );
};

export default App;
