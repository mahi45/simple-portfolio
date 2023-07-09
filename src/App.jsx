import "./App.css";
import Analytics from "./Components/Analytics";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Newsletter from "./Components/Newsletter";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Hero></Hero>
        <Analytics></Analytics>
        <Newsletter></Newsletter>
      </div>
    </>
  );
}

export default App;
