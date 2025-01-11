import { electricalQ } from "../utils/electricalQ";
import Quizz from "./quiz";

function Mechanical() {
  return (
    <>
      <Quizz questionArray={electricalQ} />
    </>
  );
}

export default Mechanical;
