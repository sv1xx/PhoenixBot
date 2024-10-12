import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Introducion from "./components/introduction/Introducion";

const App = () => {
  return (
    <>
      <Header />
      <Introducion />
      <Cards />
      <About />
      <Footer />
    </>
  );
};

export default App;
