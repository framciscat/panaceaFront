import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import  Medic from '../assets/foto-medic.jpg';


export default function ImgMediaCard() {
  return (

    <Container sx={{display: 'flex'}}>
    <Card sx={{ maxWidth: 345, margin:'25px'}}>
      <CardMedia
        component="img"
        alt="medic"
        height="140"
        image={Medic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tu expediente médico
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sé el dueño de tu información médica, revisa todos los detalles que necesites.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/' size="small">Saber más</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, margin:'25px' }}>
      <CardMedia
        component="img"
        alt="medic"
        height="140"
        image={Medic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ¿Cómo te sientes?
        </Typography>
        <Typography variant="body2" color="text.secondary">
         ¿Estás cursando una enfermedad? Hazle un seguimiento de tus síntomas y signos
        </Typography>
      </CardContent>
      <CardActions>
    
        <Button  href='/'size="small">Saber más</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345, margin:'25px' }}>
      <CardMedia
        component="img"
        alt="Medico"
        height="140"
        image={Medic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Exámenes médicos
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Compara los resultados de tus exámenes imagenológicos y de laboratorio
        cuando desees.
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/'size="small"> Saber más</Button>
      </CardActions>
    </Card>

    </Container>


  );
}