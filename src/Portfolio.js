
import React from 'react';
import { DataContext } from './context/Data';
import { Card, CardContent, CardMedia, CardActionArea, Grid, IconButton, Typography, Tooltip  } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

function Portfolio() {
    const { projects } = useContext(DataContext);

    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={3}>
                <Grid container item spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Tooltip title="Click To View Full Project" arrow>
                        <Card>
                            <CardActionArea component={Link} to={`/project/${projects[0]?.id}`}>
                                <LazyLoad 
                                    height={140} 
                                    offset={100} 
                                    placeholder={<div style={{ height: '140px', backgroundColor: '#e0e0e0' }} />}
                                >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={projects[0].imageUrl}
                                    alt={projects[0].title}
                                />
                                </LazyLoad>
                                <CardContent>
                                    <Typography variant="h6">{projects[0].title}</Typography>
                                    <span style={{ fontSize: '10px' }}>{projects[0].shortDescription}</span>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                        {projects[0].languages.map((icon, index) => (
                                            <IconButton key={index} color="black">
                                                {icon}
                                            </IconButton>
                                        ))}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Tooltip title="Click To View Full Project" arrow>
                        <Card>
                            <CardActionArea component={Link} to={`project/${projects[1]?.id}`}>
                                <LazyLoad
                                     height={140} 
                                     offset={100} 
                                     placeholder={<div style={{ height: '140px', backgroundColor: '#e0e0e0' }} />}
                                >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={projects[1].imageUrl}
                                    alt={projects[1].title}
                                />
                                </LazyLoad>
                                <CardContent>
                                    <Typography variant="h6">{projects[1].title}</Typography>
                                    <span style={{ fontSize: '10px' }}>{projects[1].shortDescription}</span>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                        {projects[1].languages.map((icon, index) => (
                                            <IconButton key={index} color="black">
                                                {icon}
                                            </IconButton>
                                        ))}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Tooltip>
                    </Grid>
                </Grid>

                {/* New row for the bottom cards */}
                <Grid container item spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                    <Tooltip title="Click To View Full Project" arrow>
                        <Card>
                            <CardActionArea component={Link} to={`/project/${projects[2].id}`}>
                                <LazyLoad
                                     height={140} 
                                     offset={100} 
                                     placeholder={<div style={{ height: '140px', backgroundColor: '#e0e0e0' }} />}
                                >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={projects[2].imageUrl}
                                    alt={projects[2].title}
                                />
                                </LazyLoad>
                                <CardContent>
                                    <Typography variant="h6">{projects[2].title}</Typography>
                                    <span style={{ fontSize: '10px' }}>{projects[2].shortDescription}</span>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                        {projects[2].languages.map((icon, index) => (
                                            <IconButton key={index} color="black">
                                                {icon}
                                            </IconButton>
                                        ))}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Portfolio;





