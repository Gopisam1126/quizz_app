import Footer from "./assets/components/footer";
import Header from "./assets/components/header";
import Quizz from "./assets/components/quiz";
import "./assets/compStyles/common.css";

function App() {
  return (
    <>
      <section className="qz-main-section">
        <Header />
        <Quizz />
        <Footer />
      </section>
    </>
  );
}

export default App;
