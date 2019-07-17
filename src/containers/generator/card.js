import { useState } from "react";
import GeneratorCardComponent from "../../components/generator/card";
import copySelection from "../../services/copySelection";

function GeneratorCard({ key, generator, options }) {
  const [state, setState] = useState({ value: "", options: options || "" });

  const handleChange = e => {
    const target = e.target;
    const isCheckbox = target.type === "checkbox";
    const value = isCheckbox ? target.checked : target.value;
    const name = target.name;

    setState(x => {
      return {
        ...x,
        [name]: value
      };
    });

    if (isCheckbox && generator.mask)
      setState(x => ({ ...x, value: generator.generate.formatter(x.value) }));
  };

  const copy = str => copySelection(str);

  const generate = e =>
    setState(x => ({ ...x, value: generator.generate(x.options) }));

  const validate = () => {};

  return GeneratorCardComponent({
    key,
    generator,
    validate,
    state,
    generate,
    handleChange,
    copy
  });
}

export default GeneratorCard;
