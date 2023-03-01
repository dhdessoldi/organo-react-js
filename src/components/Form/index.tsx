import "./Form.css";
import InputText from "../InputText";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";
import { IEmployee } from "../../shared/interfaces/IEmployee";

interface FormProps {
  signedEmployee: (employee: IEmployee) => void;
  times: string[];
}

const Form = (props: FormProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.signedEmployee({
      nome,
      cargo,
      imagem,
      time,
      data
    });
    setNome("");
    setImagem("");
    setCargo("");
    setTime("");
    setData("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={nome}
          onChanged={(value) => setNome(value)}
        />
        <InputText
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={cargo}
          onChanged={(value) => setCargo(value)}
        />
        <InputText
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={imagem}
          onChanged={(value) => setImagem(value)}
        />
        <InputText
          label="Data de entrada no time"
          placeholder=""
          value={data}
          onChanged={(value) => setData(value)}
          type='date'
        />
        <Dropdown
          required={true}
          label="Time"
          items={props.times}
          value={time}
          onChanged={(value) => setTime(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
