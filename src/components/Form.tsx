import { useState } from 'react';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, Container } from '@mui/material';

export default function Form() {

let navigate=useNavigate()

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
}

const [profile, setProfile] = useState<Profile>({
  firstName: "",
  lastName: "",
  email: "",
});

const { firstName, lastName, email } = profile;

const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
  setProfile({ ...profile, [e.currentTarget.name]: e.currentTarget.value });
};

const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

  await axios.post("http://localhost:8080/profiles", profile);
  navigate("/");
};

  return (
 <Container>
    <form onSubmit={(e) => onSubmit(e)}>
    <FormControl>
      <h2>¿Qué desea agregar a su expediente?</h2>
    <FormLabel htmlFor="Name" className="form-label">Alergias</FormLabel>
    <TextField type="text"
           className="form-control"
            placeholder="Agregar nombre"
            name="firstName"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
          />
   
   <FormLabel htmlFor="Email" className="form-label">Fármacos</FormLabel>
    <TextField type="text"
           className="form-control"
            placeholder="Agregar medicamentos"
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
          />

<FormLabel htmlFor="lastName" className="form-label">Citas médicas</FormLabel>
    <TextField type="text"
           className="form-control"
            placeholder="Agregar nombre"
            name="lastName"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e)}
          />
<br/>
<Button type="submit" className="btn btn-outline" variant="contained">Agregar</Button>
     </FormControl>
</form>

</Container> 

    

  );
}
