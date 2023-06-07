import { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel, Container } from "@mui/material";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function EditForm() {
  let navigate = useNavigate();

  const { id } = useParams();

  interface Medical {
    medicalApp: string;
    symptoms: string;
    drugs: string;
  }
  // valor inicial del estado profile y los datos que se van a actualizar con setprofile
  const [medicals, setMedicals] = useState<Medical>({
    medicalApp: "",
    symptoms: "",
    drugs: "",
  });

  const { medicalApp, symptoms, drugs } = medicals;

  // Manejar cambios den input cuando se realice un evento de cambio
  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setMedicals({ ...medicals, [name]: value });
  };

  useEffect(() => {
    loadMedicals();
  }, []);

  const url = "http://localhost:8080/medicals/";

  //Manejar el envio del formulario con la solicitud POST de axios
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.put(`${url}${id}`, medicals);
    navigate("/");
  };

  const loadMedicals = async () => {
    const result = await axios.get(`${url}${id}`);
    setMedicals(result.data);
  };

  return (
    <Container
      sx={{ background: "white", width: "450px", borderRadius: "17px" }}
    >
      <form onSubmit={(e) => onSubmit(e)}>
        <FormControl>
          <h2>¿Qué desea editar?</h2>
          <FormLabel htmlFor="Name" className="form-label">
            Citas médicas
          </FormLabel>
          <TextField
            type="text"
            className="form-control"
            name="medicalApp"
            value={medicalApp}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onInputChange(e)
            }
          />

          <FormLabel htmlFor="Email" className="form-label">
            Fármacos
          </FormLabel>
          <TextField
            type="text"
            className="form-control"
            name="drugs"
            value={drugs}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onInputChange(e)
            }
          />

          <FormLabel htmlFor="lastName" className="form-label">
            Sintomas y signos
          </FormLabel>
          <TextField
            type="text"
            className="form-control"
            name="symptoms"
            value={symptoms}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onInputChange(e)
            }
          />
          <br />
          <Button
            type="submit"
            className="btn btn-outline"
            variant="contained"
            sx={{ mb: 2 }}
          >
            Agregar
          </Button>
          <Button component={Link} to="/">
            {" "}
            Cancelar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
