import { IEmployee } from "../../shared/interfaces/IEmployee";
import Employee from "../Employee";
import "./Squad.css";
import React from 'react';


interface SquadProps {
  corPrimaria: string
  corSecundaria: string
  nome: string
  employees: IEmployee[]
}

const Squad = (props: SquadProps) => {
  return (
    (props.employees.length > 0) ? (
      <section
        className="squad"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="employees">
          {props.employees.map((employee) => (
            <Employee
              key={employee.nome}
              nome={employee.nome}
              cargo={employee.cargo}
              imagem={employee.imagem}
              corDeFundo={props.corPrimaria}
              data={employee.data}
            />
          ))}
        </div>
      </section>
    ) : <></>
  );
};

export default Squad;
