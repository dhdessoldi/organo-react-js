import './Form.css'
import InputText from '../InputText'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        props.signedEmployee({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('')
        setImagem('')
        setCargo('')
        setTime('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    value={nome}
                    onChanged = {value => setNome(value)}
                />
                <InputText 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    value={cargo}
                    onChanged = {value => setCargo(value)} 
                />
                <InputText 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" 
                value={imagem}
                onChanged = {value => setImagem(value)}
                />
                <Dropdown 
                    required={true} 
                    label="Time" 
                    items={props.times}
                    value={time}
                    onChanged = {value => setTime(value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
}

export default Form