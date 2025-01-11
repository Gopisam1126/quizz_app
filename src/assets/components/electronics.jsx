import { electronicsQ } from "../utils/electronicsQ";
import Quizz from "./quiz";

function Mechanical() {
  return (
    <>
      <Quizz questionArray={electronicsQ} />
    </>
  );
}

export default Mechanical;
