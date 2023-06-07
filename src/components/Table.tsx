
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EyeIcon from "@mui/icons-material/RemoveRedEye";

export default function BasicTable(): JSX.Element {
  // estado inicial con la actualización de datos
  const [medicals, setMedicals] = useState<Array<any>>([]);


  // Cada vez que nuestro código se renderiza, se va a ejecutar loadProfiles
  useEffect(() => {
    loadMedicals();
  }, []);
  // Realizar solicitud http GET con axios y actualizar profiles con setProfiles
  const loadMedicals = async () => {
    const result = await axios.get("http://localhost:8080/medicals");
    setMedicals(result.data);
  };

  const deleteMedicals = async (id: number) => {
    await axios.delete(`http://localhost:8080/medicals/${id}`);
    loadMedicals();
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 680 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <strong>Citas médicas</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Fármacos</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Sintomas y signos</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {medicals.map((medical) => (
              <TableRow>
                <TableCell align="center">{medical.medicalApp}</TableCell>
                <TableCell align="center">{medical.drugs}</TableCell>
                <TableCell align="center">{medical.symptoms}</TableCell>

                <TableCell align="right">
                  <Button component={Link} to={`/edit/${medical.id}`}>
                    <EditIcon />
                  </Button>
                  <Button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteMedicals(medical.id)}
                  >
                    <DeleteIcon />
                  </Button>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/view/${medical.id}`}
                  ></Link>

                  <Button component={Link} to={`/view/${medical.id}`}>
                    <EyeIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


    </div>
  );
}
