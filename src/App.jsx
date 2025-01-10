// import Footer from "./assets/components/footer";
import Header from "./assets/components/header";
// import Quizz from "./assets/components/quiz";
import "./assets/compStyles/common.css";

function App() {
  return (
    <>
      <section className="qz-main-section w-screen h-screen overflow-hidden bg-main-background bg-center bg-cover">
        <Header />
        {/* <div className="relative top-48">
          <Quizz />
          <Footer />
        </div> */}
      </section>
    </>
  );
}

export default App;
