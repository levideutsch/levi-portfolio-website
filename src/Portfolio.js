import React, { useContext } from 'react';
import { DataContext } from './context/Data';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    ListItem,
    ListItemText,
    Container,
    Grid,
    Tooltip,
    ListItemIcon,
    Box
} from '@mui/material';
import { Link } from 'react-router-dom';
// import LazyLoad from 'react-lazyload';


function Portfolio() {
    const { projects } = useContext(DataContext);


    return (
        <Box sx={{pt: {xs: 10,lg: 10}}}>
            <Typography
                variant="h5"
                sx={{ pb: { xs: 2, lg: 2}}}
            >
                Portfolio
            </Typography>
            <Container maxWidth="lg">
                    <Grid 
                        container 
                        spacing={{xs: 3, sm: 2}} 
                        sx={{pt: {xs:0, sm: 0, lg: 0}}}
                    >
                        {
                            projects?.map((project) => (
                                <Grid 
                                    item 
                                    xs={12} 
                                    sm={12} 
                                    md={6} 
                                    lg={6} 
                                    xl={6} 
                                    key={project?.id}
                                >
                                    <Card 
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            backgroundImage: "none",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <Link to={`/project/${project.id}`}
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit"
                                            }}
                                        >
                                            <Tooltip title="Click To View Full Project" arrow>
                                                {/* <LazyLoad> */}
                                                    <CardMedia component="img"
                                                    image={project?.imageUrl}
                                                    />
                                                {/* </LazyLoad> */}
                                                <CardContent
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <ListItem disablePadding sx={{ flexDirection: "column", alignItems: "center",  textAlign: "center" }}>
                                                        <ListItemText primary={<Typography sx={{ fontSize: {xs: "10px", sm: "15px", lg: "16px", xl: "16px"} }}>
                                                                                    {project.shortDescription}
                                                                                </Typography>
                                                                            }
                                                        />
                                                        <Box sx={{ display: "flex", gap: 1, mt: 3, mb: 3 }}>
                                                            {
                                                                project?.languages?.map((Language, index) => (
                                                                    <ListItemIcon
                                                                        key={index}
                                                                        sx={{
                                                                            color: "black",
                                                                            
                                                                        }}
                                                                        >
                                                                        {Language}
                                                                    </ListItemIcon>
                                                                ))
                                                            }
                                                        </Box>
                                                    </ListItem>
                                                </CardContent>
                                            </Tooltip>
                                        </Link>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
            </Container>
        </Box>
    );
}

export default Portfolio;


    // const containerStyle = {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center', 
    //     padding: '20px'
    // };

    // const rowStyle = {
    //     display: isMobile ? 'flex' : 'flex', 
    //     flexDirection: isMobile ? 'column' : 'row', 
    //     justifyContent: 'center', 
    //     gap: '15px', 
    //     marginBottom: isMobile ? 10 : '15px', 
    // };


    // const cardStyle = {
    //     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    //     width: isMobile ? '100%' : '300px', 
    //     height: '400px', 
    // };

    // const hoverStyle = {
    //     transform: 'scale(1.05)',
    //     boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    // };

   
    // const groupedProjects = projects.reduce((acc, project, index) => {
    //     if (index % 2 === 0) {
    //         acc.push([project]);
    //     } else {
    //         acc[acc.length - 1].push(project);
    //     }
    //     return acc;
    // }, []);





        // <div style={containerStyle}>
        //     {groupedProjects.map((row, rowIndex) => (
        //         <div key={rowIndex} style={rowStyle}>
        //             {row.map((project) => (
        //                 <div key={project.id}>
        //                     <Tooltip title="Click To View Full Project" arrow>
        //                         <Card
        //                             style={cardStyle}
        //                             onMouseOver={(e) => {
        //                                 e.currentTarget.style.transform = hoverStyle.transform;
        //                                 e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
        //                             }}
        //                             onMouseOut={(e) => {
        //                                 e.currentTarget.style.transform = 'scale(1)';
        //                                 e.currentTarget.style.boxShadow = 'none';
        //                             }}
        //                         >
        //                             <CardActionArea component={Link} to={`/project/${project.id}`}>
        //                                 <LazyLoad
        //                                     height={220}
        //                                     offset={100}
        //                                     placeholder={<div style={{ height: '220px', backgroundColor: '#e0e0e0' }} />}
        //                                 >
        //                                     <CardMedia
        //                                         component="img"
        //                                         height="220"
        //                                         image={project.imageUrl}
        //                                         alt={project.title}
        //                                         style={{ objectFit: 'cover' }}
        //                                     />
        //                                 </LazyLoad>
        //                                 <CardContent style={{ height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        //                                     <Typography variant="h6">{project.title}</Typography>
        //                                     <Typography variant="body2" color="textSecondary">
        //                                         {project.shortDescription}
        //                                     </Typography>
        //                                     <div style={{ display: "flex", justifyContent: "center", marginTop: "auto", marginBottom: "5px" }}>
        //                                         {project.languages.map((icon, idx) => (
        //                                             <IconButton key={idx} color="black" size="small">
        //                                                 {icon}
        //                                             </IconButton>
        //                                         ))}
        //                                     </div>
        //                                 </CardContent>
        //                             </CardActionArea>
        //                         </Card>
        //                     </Tooltip>
        //                 </div>
        //             ))}
        //         </div>
        //     ))}
        // </div>