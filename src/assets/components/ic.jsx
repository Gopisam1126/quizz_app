import { icQ } from "../utils/icQ";
import Quizz from "./quiz";

function Mechanical() {
  return (
    <>
      <Quizz questionArray={icQ} />
    </>
  );
}

export default Mechanical;
