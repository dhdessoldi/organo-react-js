import './InputText.css'

const InputText = (props) => {



    const onFill = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className='input-text'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onFill} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText