import { civilQ } from "../utils/civilQ";
import Quizz from "./quiz";

function Civil() {
  return (
    <>
      <Quizz questionArray={civilQ} />
    </>
  );
}

export default Civil;
