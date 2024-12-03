import React from 'react';
import { DataContext } from './context/Data';
import {
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    IconButton,
    Typography,
    Tooltip,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

function Portfolio() {
    const { projects } = useContext(DataContext);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        padding: '20px'
    };

    const rowStyle = {
        display: isMobile ? 'flex' : 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        justifyContent: 'center', 
        gap: '15px', 
        marginBottom: isMobile ? 10 : '15px', 
    };


    const cardStyle = {
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        width: isMobile ? '100%' : '300px', 
        height: '400px', 
    };

    const hoverStyle = {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    };

   
    const groupedProjects = projects.reduce((acc, project, index) => {
        if (index % 2 === 0) {
            acc.push([project]);
        } else {
            acc[acc.length - 1].push(project);
        }
        return acc;
    }, []);

    return (
        <div style={containerStyle}>
            {groupedProjects.map((row, rowIndex) => (
                <div key={rowIndex} style={rowStyle}>
                    {row.map((project) => (
                        <div key={project.id}>
                            <Tooltip title="Click To View Full Project" arrow>
                                <Card
                                    style={cardStyle}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = hoverStyle.transform;
                                        e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <CardActionArea component={Link} to={`/project/${project.id}`}>
                                        <LazyLoad
                                            height={220}
                                            offset={100}
                                            placeholder={<div style={{ height: '220px', backgroundColor: '#e0e0e0' }} />}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="220"
                                                image={project.imageUrl}
                                                alt={project.title}
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </LazyLoad>
                                        <CardContent style={{ height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                            <Typography variant="h6">{project.title}</Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {project.shortDescription}
                                            </Typography>
                                            <div style={{ display: "flex", justifyContent: "center", marginTop: "auto", marginBottom: "5px" }}>
                                                {project.languages.map((icon, idx) => (
                                                    <IconButton key={idx} color="black" size="small">
                                                        {icon}
                                                    </IconButton>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Tooltip>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Portfolio;