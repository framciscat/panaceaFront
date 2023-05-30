import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BasicTable(): JSX.Element {

  const [profiles, setProfiles] = useState<Array<any>>([]);

  useEffect(() => {
      loadProfiles();
  },[]);

  const loadProfiles = async() => {
      const result = await axios.get("http://localhost:8080/profiles");
      setProfiles(result.data);
  };

  return (
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <TableRow>

                      <TableCell align="right">Alergias</TableCell>
                      <TableCell align="right">Farmacos</TableCell>
                      <TableCell align="right">Citas Médicas</TableCell>
                    
                      <TableCell align="right">Action</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {
                      profiles.map((profile,index)=>(
                          <TableRow key={index}>
                              <TableCell align="right">{profile.firstName}</TableCell>
                              <TableCell align="right">{profile.lastName}</TableCell>
                              <TableCell align="right">{profile.email}</TableCell>
                             
                              <TableCell align="right">
                                  <Button className="btn btn-primary mx-2">View</Button>
                                  <Button className="btn btn-outline-primary mx-2">Edit</Button>
                                  <Button className="btn btn-danger mx-2">Delete</Button>
                              </TableCell>
                          </TableRow>
                      ))
                  }
              </TableBody>
          </Table>
      </TableContainer>
  );
}