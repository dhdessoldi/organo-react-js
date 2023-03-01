import './Employee.css'

interface EmployeeProps {
    nome: string
    cargo: string
    imagem: string
    corDeFundo: string
}

const Employee = ({nome,imagem,cargo,corDeFundo}: EmployeeProps) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>

    )
}

export default Employee