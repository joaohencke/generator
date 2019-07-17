import RootComponent from "../components/root";

import generatorsList from "../services/generators";

function Root() {
  return RootComponent({ generatorsList });
}

export default Root;
