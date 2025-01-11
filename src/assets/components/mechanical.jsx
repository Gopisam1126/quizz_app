import { mechQ } from "../utils/mechQ";
import Quizz from "./quiz";

function Mechanical() {
  return (
    <>
      <Quizz questionArray={mechQ} />
    </>
  );
}

export default Mechanical;
