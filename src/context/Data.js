import React, { useState } from "react";
import "@fontsource/roboto-mono"; // Import the font
import { FaReact, FaJsSquare } from "react-icons/fa"; // Import icons
import { SiRubyonrails, SiPostgresql } from "react-icons/si";



const DataContext = React.createContext();

function DataProvider({ children }) {
    const [projects, setProjects] = useState(
        [
            {
              id: 1,
              title: 'Smart Inventory',
              imageUrl: 'https://www.netsuite.com/portal/assets/img/business-articles/inventory-management/social-inventory-list.jpg', // Replace with actual image URLs
              languages: [<FaReact size="40" style={{ margin: "0 10px" }}/>, <SiRubyonrails size="40" style={{ margin: "0 10px" }}/>, <SiPostgresql size="40" style={{ margin: "0 10px" }}/>],
              description: "Smart Inventory is a comprehensive inventory tracking system designed for a wholesale cleaning products company. It enables the business owner to monitor warehouse stock levels, manage incoming purchase orders, and track sales invoices. Key features include PDF and photo uploads and email notifications to streamline inventory management and communication.",
              links: [{gitHub: "Private"}, {youTube: "Not Yet Created"}],
              images: [],

            },
            {
              id: 2,
              title: 'Yent-Connect',
              imageUrl: 'https://github.com/levideutsch/yent-connect/raw/main/readme_photos/home-page-1.png', // Replace with actual image URLs
              languages: [<FaReact size="40" style={{ margin: "0 10px" }}/>, <SiRubyonrails size="40" style={{ margin: "0 10px" }}/>, <SiPostgresql size="40" style={{ margin: "0 10px" }}/>],
              description: "",
              links: [{gitHub: "https://github.com/levideutsch/yent-connect"}, {youTube: "Not Yet Created"}],
              images: [],
            },
            {
              id: 3,
              title: 'My Wishlist',
              imageUrl: 'https://github.com/levideutsch/my-wishlist/raw/main/Products-by-category.png', // Replace with actual image URLs
              languages: [<FaReact/>, <SiRubyonrails />, <SiPostgresql />],
              description: "",
              links: [{gitHub:" https://github.com/levideutsch/my-wishlist"}, {youTube: "https://youtu.be/GTwc4jyi44o"}],
              images: [],
            },
            {
                id: 4,
                title: "Not Airbnb",
                imageUrl: "https://github.com/levideutsch/react-phase-2-project/raw/main/img1.png",
                languages: [<FaJsSquare />],
                description: "",
                links: [{gitHub: "https://github.com/levideutsch/react-phase-2-project"}, {youTube: "https://youtu.be/IK8A4We1MKc"}],
                images: [],
            }
          ]
    )

  return (
    <DataContext.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export { DataContext, DataProvider };
