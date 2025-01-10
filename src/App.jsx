// import Footer from "./assets/components/footer";
import Header from "./assets/components/header";
// import Quizz from "./assets/components/quiz";
import Mechanical from "./assets/components/mechanical";
import IC from "./assets/components/ic";
import Civil from "./assets/components/civil";
import Electrical from "./assets/components/electrical";
import Electronics from "./assets/components/electronics";
import ComputerScience from "./assets/components/cs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/compStyles/common.css";

function App() {
  return (
    <>
      <section className="qz-main-section w-screen h-screen overflow-hidden bg-main-background bg-center bg-cover">
        <Router>
          <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="/mechanical" element={<Mechanical/>}/>
            <Route path="/civil" element={<Civil/>}/>
            <Route path="/ic" element={<IC/>}/>
            <Route path="/electrical" element={<Electrical/>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/computer-science" element={<ComputerScience/>}/>
          </Routes>
        </Router>
        {/* <div className="relative top-48">
          <Quizz />
          <Footer />
        </div> */}
      </section>
    </>
  );
}

export default App;
