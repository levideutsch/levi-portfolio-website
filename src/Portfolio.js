import React from 'react';
import { DataContext } from './context/Data';
import { Card, CardContent, CardMedia, CardActionArea, Grid, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router




function Portfolio() {
    const {projects} = useContext(DataContext)

    return (
        <div style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid container item spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea component={Link} to={`/project/${projects[0].id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={projects[0].imageUrl}
                    alt={projects[0].title}
                  />
                  <CardContent>
                    <Typography variant="h6">{projects[0].title}</Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                      {projects[0].languages.map((icon, index) => (
                        <IconButton key={index} color="primary">
                          {icon}
                        </IconButton>
                      ))}
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea component={Link} to={`/project/${projects[1].id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={projects[1].imageUrl}
                    alt={projects[1].title}
                  />
                  <CardContent>
                    <Typography variant="h6">{projects[1].title}</Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                      {projects[1].languages.map((icon, index) => (
                        <IconButton key={index} color="primary">
                          {icon}
                        </IconButton>
                      ))}
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Grid container item justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea component={Link} to={`project/${projects[2].id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={projects[2].imageUrl}
                    alt={projects[2].title}
                  />
                  <CardContent>
                    <Typography variant="h6">{projects[2].title}</Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                      {projects[2].languages.map((icon, index) => (
                        <IconButton key={index} color="primary">
                          {icon}
                        </IconButton>
                      ))}
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
}
export default Portfolio