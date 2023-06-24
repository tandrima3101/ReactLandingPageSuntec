import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import profile from "../assets/images/profile.jpg";
import socialmedia from "../assets/images/social_media.jpg";
import instagram from "../assets/images/instagram.jpeg";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
function CustomerSection() {
  return (
    <Container className="customer_section" maxWidth={false}>
        <Container maxWidth="lg">
          <Grid container spacing={2} className="customer_grid">
            <Grid item xs={4} md={4} className="customer_grid_item">
              <Typography
                variant="h3"
                color="#fff"
                textAlign="center"
                sx={{
                  textShadow: "-30px -20px 2px rgba(255,255,255,0.2)",
                  fontWeight: "bold",
                }}
              >
                Journey
              </Typography>
              <img src={socialmedia} className="customer_image" />
            </Grid>
            <Grid item xs={4} md={4} className="customer_grid_item">
              <img src={profile} width="100%" className="profile_image" />
              <Typography
                variant="h2"
                color="#fff"
                textAlign="center"
                fontWeight="bold"
                fontSize="70px"
              >
                ANNETE SMITH
              </Typography>
              <ButtonGroup sx={{display:'block',textAlign:'center'}}>
                <Button style={{color:'#FFF',border:'none'}}><ArrowLeftIcon/></Button>
                <Button style={{color:'#FFF',border:'none'}}><ArrowRightIcon/></Button>
              </ButtonGroup>
              <Button
                variant="contained"
                className="customer_button"
                color="error"
              >
                Custmer Details
              </Button>
              <Button variant="contained" className="customer_button">
                Custmer History
              </Button>
              <Button className="customer_button">Segment Date</Button>
            </Grid>
            <Grid item xs={4} md={4} className="customer_grid_item activity_tab">
              <Typography
                variant="h3"
                color="#fff"
                textAlign="center"
                sx={{
                  textShadow: "30px -20px 2px rgba(255,255,255,0.2)",
                  fontWeight: "bold",
                }}
              >
                Activity
              </Typography>
              <Card className="customer_card">
                <CardContent sx={{ padding: "0px","&:last-child":{paddingBottom:'0px'} }}>
                  <Typography
                    variant="h6"
                    color="grey"
                    textAlign="center"
                    fontSize="15px"
                  >
                    Liked This
                  </Typography>
                  <Typography
                    variant="h5"
                    color="#fff"
                    textAlign="center"
                    margin="0px"
                    fontWeight='bold'
                  >
                    POST
                  </Typography>
                </CardContent>
              </Card>
              <Card className="customer_card">
                <CardMedia>
                  <img src={instagram} width="100%" />
                </CardMedia>
                <CardActions>
                  <Button
                    variant="contained"
                    className="customer_button"
                    color="error"
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
              <Card className="customer_side_card first_side_card">
                <CardContent sx={{ padding: "10px","&:last-child":{paddingBottom:'10px'} }}>
                  <Typography
                    variant="h6"
                    color="grey"
                    textAlign="center"
                    fontSize="15px"
                  >
                    You bought this
                  </Typography>
                  <Typography variant="h5" color="#fff" textAlign="center" fontWeight='bold'>
                    ITEM
                  </Typography>
                </CardContent>
              </Card>
              <Card className="customer_side_card second_side_card">
                <CardContent sx={{ padding: "10px","&:last-child":{paddingBottom:'10px'} }}>
                  <Typography
                    variant="h6"
                    color="grey"
                    textAlign="center"
                    fontSize="15px"
                  >
                    Ordered
                  </Typography>
                  <Typography variant="h5" color="#fff" textAlign="center" fontWeight='bold'>
                    THIS ITEM
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
  )
}

export default CustomerSection