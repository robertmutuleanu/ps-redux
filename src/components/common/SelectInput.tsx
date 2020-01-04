import React from 'react';

const SelectInput = ({ id, label, defaultOption, options, name, value, onChange, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <select id={id} className="form-control" name={name} value={value} onChange={onChange}>
          <option value="">{defaultOption}</option>
          {options.map(o => {
            return (
              <option key={o.value} value={o.value}>
                {o.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

type Props = {
  id: string;
  label: string;
  defaultOption?: string;
  options: Option[];
  name: string;
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
};

type Option = {
  value: string | number;
  text: string;
};

export default SelectInput;
