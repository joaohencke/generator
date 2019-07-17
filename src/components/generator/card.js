import React from "react";
import { is } from "@joao.hencke/utils/lib/object";

const GeneratorCard = ({
  generator,
  state,
  key,
  handleChange,
  copy,
  generate,
  validate
}) => (
  <div className="col">
    <form className="form" key={key}>
      <div className="text-center">
        <div className="card-header">
          <h5 className="card-title">{generator.title}</h5>
        </div>
        <div className="card-body">
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Gerar/Validar"
                value={state.value}
                name="value"
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button
                  className="btn-sm btn-info"
                  type="button"
                  disabled={!state.value}
                  onClick={() => copy(state.value)}
                >
                  <i className="fa fa-copy" />
                </button>
              </div>
            </div>
          </div>
          {state.options && is("array", state.options) && (
            <div className="form-group">
              <select
                name="options"
                id="options"
                className="form-control"
                onChange={handleChange}
              >
                {state.options.map(val => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          )}
          {generator.mask && (
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChange}
                  id="options"
                  name="options"
                />
                Máscara
              </label>
            </div>
          )}
        </div>
        <div className="card-footer">
          {generator.generate && (
            <button
              type="button"
              className="btn btn-md btn-primary"
              onClick={generate}
            >
              Gerar
            </button>
          )}
          {generator.validate && (
            <button
              type="button"
              className="btn btn-md btn-secondary"
              onClick={validate}
            >
              Validar
            </button>
          )}
        </div>
      </div>
    </form>
  </div>
);

export default GeneratorCard;
