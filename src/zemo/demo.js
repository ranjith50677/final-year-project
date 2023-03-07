import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import { Grid } from '@mui/material';

export default function MediaCard() {
  return (
    <DashboardLayout>  
         <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={6} lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSeYD6fFU6pTBR6Vj5IHy2LN2O07SYWoQSsyl0hsvWN45j9Cg0fvXW0x_if0QtjNn4FY&usqp=CAU"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained">Add</Button>
      <Button variant="contained">View</Button>
      </CardActions>
    </Card>
    </Grid>    
    <Grid item xs={20} md={6} lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/502301173/photo/sports-heroes.jpg?s=612x612&w=0&k=20&c=Iski7j6mRgkYSlYF1EwBr9ClnDw2Z9SBVWukzLp9RB0="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         tenice
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained">Add</Button>
      <Button variant="contained">View</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>  
    </DashboardLayout>
  );
}