import React from "react";
import GeneratorCard from "../../containers/generator/card";

const GeneratorList = ({ generators }) => (
  <div className="row">
    {generators.map((generator, index) =>
      GeneratorCard({
        generator,
        options: generator.options && generator.options(),
        key: index
      })
    )}
  </div>
);
export default GeneratorList;
