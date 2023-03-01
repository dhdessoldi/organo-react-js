import "./InputText.css";

interface InputTextProps {
  onChanged: (value: string) => void; //void é uma função que não retorna nada
  placeholder: string;
  label: string;
  value: string;
  required?: boolean;
}

const InputText = ({onChanged, label, placeholder, value, required = false}: InputTextProps) => {
  const onFill = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChanged(event.target.value);
  };

  return (
    <div className="input-text">
      <label>{label}</label>
      <input
        value={value}
        onChange={onFill}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
