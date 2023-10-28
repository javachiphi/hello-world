import React from 'react';
import './ProductSection.css'; // Importing our CSS
import { Container, Grid } from '@mui/material';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="CardContainer">
      <div className="ImageContainer">
        <img src={imageUrl} alt={title} className="card-image"/>
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

//   <Grid container spacing={2}>
//     <Grid xs={6} md={8}>
        <Card 
            imageUrl="https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29sZnxlbnwwfHwwfHx8MA%3D%3D"
            title="Systematic Approach"
            description="Address and mitigate your golfing concerns with our structured curriculum and expert guidance."
        />
//     </Grid>
//     <Grid xs={6} md={8}>
        // <Card 
        // imageUrl="https://plus.unsplash.com/premium_photo-1678858024245-8a891b301ad3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29sZiUyMGNsdWJ8ZW58MHx8MHx8fDA%3D"
        // title="Holistic Development"
        // description="Cultivate the physical and mental aspects of your game for the ultimate golfing experience."
        // />
//     </Grid>
// </Grid>
function ProductSection() {
  return (
    <div className='section'> 
    <Container style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
                <Card 
                imageUrl="https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29sZnxlbnwwfHwwfHx8MA%3D%3D"
                title="Systematic Approach"
                description="Address and mitigate your golfing concerns with our structured curriculum and expert guidance."
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card 
                    imageUrl="https://plus.unsplash.com/premium_photo-1678858024245-8a891b301ad3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29sZiUyMGNsdWJ8ZW58MHx8MHx8fDA%3D"
                    title="Holistic Development"
                    description="Cultivate the physical and mental aspects of your game for the ultimate golfing experience."
                    />
            </Grid>
        </Grid>
    </Container>
    </div>
  );
}




export default ProductSection;
