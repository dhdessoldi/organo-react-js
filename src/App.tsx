import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Squad from "./components/Squad";
import { IEmployee } from "./shared/interfaces/IEmployee";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8FFFF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [employees, setEmployees] = useState<IEmployee[]>([]);

  const newSignedEmployee = (employee: IEmployee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <Banner
        sourceImage="/imagens/banner.png"
        altText="Imagem com figuras geométricas e pessoas tocando as mãos"
      />
      <Form
        times={times.map((time) => time.nome)}
        signedEmployee={(employee) => newSignedEmployee(employee)}
      />
      {times.map((time) => (
        <Squad
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          employees={employees.filter(
            (employee) => employee.time === time.nome
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
