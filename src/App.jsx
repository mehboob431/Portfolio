import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
// import StarsCanvas from "./components/StarsCanvas";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
            {/* <StarsCanvas /> */}
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
