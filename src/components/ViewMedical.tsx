
import { CardActionArea, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Banner from '../assets/medicstuff.jpg'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MedicalCard() {
const [medical, setMedical] = useState({
medicalApp:"",
symptoms:"",
drugs:"",
});

const {id} = useParams();

useEffect(()=>{
loadMedicals();
}, []);

const loadMedicals= async ()=>{
    const result = await axios.get(`http://localhost:8080/medicals/${id}`);
    setMedical(result.data);
  };

  return (
    <Card sx={{ width: 500 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        src={Banner}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         <strong>Expediente</strong> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Citas:</strong>
          {medical.medicalApp}
          <br/>
          <strong>Fármacos:</strong>
          {medical.drugs}
          <br/>
          <strong>Síntomas y signos:</strong>
          {medical.symptoms}
        </Typography>
        <Link to={'/'}>Volver</Link>
      </CardContent>
    </CardActionArea>
  </Card>
);
}
