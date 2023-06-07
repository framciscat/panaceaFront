import { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Form() {

  let navigate = useNavigate();

interface Medical {
  medicalApp: string;
  drugs: string;
  symptoms: string;
}
// valor inicial del estado profile y los datos que se van a actualizar con setprofile
const [medicals, setMedicals] = useState<Medical>({
  medicalApp: "",
  drugs: "",
  symptoms: "",
});

const { medicalApp, drugs, symptoms } = medicals;

// Manejar cambios den input cuando se realice un evento de cambio 
const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
  setMedicals({ ...medicals, [e.currentTarget.name]: e.currentTarget.value });
};

//Manejar el envio del formulario con la solicitud POST de axios 
const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  await axios.post(`http://localhost:8080/medicals`, medicals);
  navigate("/");
};

  return (
 <Container sx={{ background: 'white', width:'650px', borderRadius:'17px', marginBottom: '30px'}}>
    <form onSubmit={(e) => onSubmit(e)}>
    <FormControl>
      <h2>¿Qué desea agregar a su expediente?</h2>
    <FormLabel className="form-label">Citas médicas</FormLabel>
    <TextField type="text"
           className="form-control"
            placeholder="Agregar nombre"
            name="medicalApp"
            value={medicalApp}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
          />
   
   <FormLabel  className="form-label">Fármacos</FormLabel>
    <TextField type="text"
           className="form-control"
            placeholder="Agregar medicamentos"
            name="drugs"
            value={drugs}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
          />

<FormLabel className="form-label">Sintomas y signos</FormLabel>
    <TextField type="text"
           className="form-control"
            placeholder="Agregar nombre"
            name="symptoms"
            value={symptoms}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
          />
<br/>
<Button type="submit" className="btn btn-outline" variant="contained"
sx={{ mb:8 }}>Agregar</Button>
     </FormControl>
</form>

</Container> 

    

  );
}
