import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import {
  Navbar,
  Intro,
  Services,
  Experience,
  // Works,
  Portfolio,
  // Testimonials,
  Contact,
  Footer
} from "./components";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      {/* <Works /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
