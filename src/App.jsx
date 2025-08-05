import "./App.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import VolunteerForm from "./components/sections/VolunteerForm";
function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Home />
      <About />
      <VolunteerForm />
      <Footer/>
    </>
  );
}

export default App;
