import React from 'react';

const TextInput = ({ id, label, placeholder, name, value, onChange, error }: Props) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += ' has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <input
          type="text"
          id={id}
          className="form-control"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  name: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default TextInput;
