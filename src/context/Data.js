import React, { useState } from "react";
import "@fontsource/roboto-mono"; // Import the font
import {
  FaReact,

} from "react-icons/fa"; // Import icons

import { SiRubyonrails, SiPostgresql } from "react-icons/si";

const DataContext = React.createContext();

function DataProvider({ children }) {
    const [projects, setProjects] = useState(
        [
            {
              id: 1,
              title: 'Smart Inventory',
              imageUrl: 'https://www.netsuite.com/portal/assets/img/business-articles/inventory-management/social-inventory-list.jpg', // Replace with actual image URLs
              languages: [<FaReact/>, <SiRubyonrails />, <SiPostgresql />]
            },
            {
              id: 2,
              title: 'Yent-Connect',
              imageUrl: 'https://github.com/levideutsch/yent-connect/raw/main/readme_photos/home-page-1.png', // Replace with actual image URLs
              languages: [<FaReact/>, <SiRubyonrails />, <SiPostgresql />]
            },
            {
              id: 3,
              title: 'My Wishlist',
              imageUrl: 'https://github.com/levideutsch/my-wishlist/raw/main/Products-by-category.png', // Replace with actual image URLs
              languages: [<FaReact/>, <SiRubyonrails />, <SiPostgresql />]
            }
          ]
    )

  return (
    <DataContext.Provider
      value={{
        projects,
        setProjects
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export { DataContext, DataProvider };
