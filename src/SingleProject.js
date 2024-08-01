import React, { useContext } from 'react';
import { DataContext } from './context/Data';
import { useParams } from 'react-router-dom';


function SingleProject() {
    const { projectId } = useParams(); // Retrieve the 'id' parameter from the URL
    const { projects } = useContext(DataContext)

    const findProject = projects.find(p => p?.id === parseInt(projectId))
 
    return (
      <div>
        <h1>Single Project Page</h1>
        <p>Project ID: {findProject.id}</p>
        {/* Add more details about the project here */}
      </div>
    );
  }
  export default SingleProject