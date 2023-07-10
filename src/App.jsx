import "./App.css";
import Analytics from "./Components/Analytics";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
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
        <Cards></Cards>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
