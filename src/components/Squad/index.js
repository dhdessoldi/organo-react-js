import './Squad.css'

const Squad = (props) => {
    return (
        
        <section className='squad' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Squad