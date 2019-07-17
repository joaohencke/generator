import { useState } from "react";
import GeneratorListComponent from "../../components/generator";

function GeneratorList({ generators: generatorsData }) {
  const [generators] = useState(generatorsData);
  return GeneratorListComponent({ generators });
}

export default GeneratorList;
