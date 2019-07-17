import React from "react";
import GeneratorList from "../containers/generator";

const Root = ({ generatorsList }) => (
  <div className="container">
    <GeneratorList generators={generatorsList} />
  </div>
);

export default Root;
