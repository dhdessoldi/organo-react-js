import "./Dropdown.css";

interface DropdownProps {
    onChanged: (value: string) => void
    label: string
    required: boolean
    value: string
    items: string[]
}

const Dropdown = (props: DropdownProps) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onChanged(event.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value=""></option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
