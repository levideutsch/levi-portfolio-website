import React, { useState } from "react";
import "@fontsource/roboto-mono"; // Import the font
import { FaReact, FaJsSquare } from "react-icons/fa"; // Import icons
import { VscJson } from "react-icons/vsc";
import { SiRubyonrails, SiPostgresql } from "react-icons/si";
import { GrHeroku } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";






const DataContext = React.createContext();

function DataProvider({ children }) {
    const [projects, setProjects] = useState(
        [
            {
              id: 1,
              title: 'Smart Inventory',
              shortDescription: "An Inventory Tracking System",
              imageUrl: 'https://www.netsuite.com/portal/assets/img/business-articles/inventory-management/social-inventory-list.jpg', // Replace with actual image URLs
              languages: [
                <FaReact size="25" style={{ margin: "0 10px" }}/>,
                <SiRubyonrails size="25" style={{ margin: "0 10px" }}/>,
                <SiPostgresql size="25" style={{ margin: "0 10px" }}/>,
                <GrHeroku size="25" style={{ margin: "0 10px" }}/>
              ],
              description: `Smart Inventory is a comprehensive inventory tracking system designed for a wholesale cleaning products
                            company. It enables the business owner to monitor warehouse stock levels, manage incoming purchase orders,
                            and track sales invoices. Key features include PDF and photo uploads and email notifications to streamline
                             inventory management and communication.`,
              detailedOverview: `This sophisticated inventory management application, meticulously
                                crafted from scratch, leverages a robust stack of technologies
                                including React, React Router, Rails, and PostgreSQL, with email
                                notifications facilitated by SendGrid and deployment on Heroku.
                                Designed to address the critical issue of inventory visibility,
                                the application empowers business owners to efficiently manage
                                their inventory by generating and tracking purchase orders and
                                invoices. It provides comprehensive analytics, including real-time
                                updates on stock levels, financial metrics, and historical sales
                                data, ensuring precise control over product quantities, financial
                                performance, and profitability. Users can manually adjust product
                                data, generate detailed PDFs, and access a messaging system for
                                seamless communication regarding purchase orders and invoices.
                                This all-in-one solution transforms inventory management into an
                                intuitive and actionable process, tailored to meet the needs of
                                modern businesses.`,             
              links: [{gitHub: "Private"}, {youTube: "Not Yet Created"}],
              images: [
                {
                  url: "https://i.imgur.com/5br0o6N.png",
                  description: "Main Home Page With Side Navigation Bar"
                },
                {
                  url: "https://i.imgur.com/Iu1HTGC.png",
                  description: "Main Home Page Table View"
                },
                {
                  url: "https://i.imgur.com/Jlf8rlw.png",
                  description: "Single Product Page"
                },
                {
                  url: "https://i.imgur.com/mVCIMYJ.png",
                  description: "Manually Adjust Products Inventory State"
                },
                {
                  url: "https://i.imgur.com/MhraHDC.png",
                  description: "View Products Transaction History"
                },
                {
                  url: "https://i.imgur.com/uowMQuB.png",
                  description: "View Products Individual Purchase Orders And Invoices"
                },
                {
                  url: "https://i.imgur.com/yXrJwQi.png",
                  description: "All Completed Purchase Orders"
                },
                {
                  url: "https://i.imgur.com/cS5bIxX.png",
                  description: "Single Purchase Order"
                },
                {
                  url: "https://i.imgur.com/Gj2I82k.png",
                  description: "All Current Invoices"
                },
                {
                  url: "https://i.imgur.com/cjkLlkh.png",
                  description: "Single Invoice"
                },
                {
                  url: "https://i.imgur.com/50ufd26.png",
                  description: "Analytics To View All Data Related To All Products"
                },
                {
                  url: "https://i.imgur.com/C7GfLqS.png",
                  description: "View Inventory State"
                },
                {
                  url: "https://i.imgur.com/6lA2CHt.png",
                  description: "Find Product By Name"
                },
              ],

            },
            {
              id: 2,
              title: 'Yent-Connect',
              shortDescription: "A Social Media Platform",
              imageUrl: 'https://github.com/levideutsch/yent-connect/raw/main/readme_photos/home-page-1.png', // Replace with actual image URLs
              languages: [<FaReact size="25" style={{ margin: "0 10px" }}/>, <SiRubyonrails size="25" style={{ margin: "0 10px" }}/>, <SiPostgresql size="25" style={{ margin: "0 10px" }}/>],
              description: ` I built a social media platform called "Yent-Connect" for fun. It includes features such as users, friends, posts, likes,
                             unlikes, messages, a page with posts from people I follow, and a page with posts from all users on the application. 
                             The platform was built using React, React Router, Ruby on Rails, and SQLite`,
              detailedOverview: null,              
              links: [
                {gitHub: "https://github.com/levideutsch/yent-connect"}, 
                {youTube: "Not Yet Created"}
              ],
              images: [
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/welcome-page.png",
                  description: "Welcome Page"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/login-page-2.png",
                  description: "Login Page"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/home-page-1.png",
                  description: "Home Page"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/explore-page.png",
                  description: "Explore Posts From Users You Do Not Follow"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/liking-post.png",
                  description: "Likes And Comments"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/create-post-page.png",
                  description: "Create Posts"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/my-profile-page.png",
                  description: "View Profiles"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/toggle-posts.png",
                  description: "Explore Users Posts"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/toggle-followers.png",
                  description: "Explore Users Connections"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/settings-page.png",
                  description: "Settings Page"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/message-icon.png",
                  description: "Click To Begin Conversation"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/message-popup.png",
                  description: "Confirm Conversation"
                },
                {
                  url: "https://github.com/levideutsch/yent-connect/raw/main/readme_photos/chat-page.png",
                  description: "Chat Room"
                },
              ],
            },
            {
                id: 3,
                title: "Not Airbnb",
                shortDescription: "A Property Listing Management Tool",
                imageUrl: "https://github.com/levideutsch/react-phase-2-project/raw/main/img1.png",
                languages: [<FaJsSquare  size="25" style={{ margin: "0 10px" }} />, <VscJson size="25" style={{ margin: "0 10px" }} />],
                description: `Just a few months into my tech career, I was tasked with building a project for school using React and JSON Server.
                              I decided to create a backend version for owners of Airbnb properties to list their homes. Using React and JSON Server,
                              the project allows users to display their properties, set some as listed and others as unlisted. Additionally, 
                              it includes functionality to filter listings by name and distance, providing a comprehensive tool for property owners to manage
                              their listings effectively`,
                detailedOverview: null,                
                links: [
                  { gitHub: "https://github.com/levideutsch/react-phase-2-project"}, 
                  {youTube: "https://youtu.be/IK8A4We1MKc"}
                ],
                images: [
                  {
                    url: "https://github.com/levideutsch/react-phase-2-project/blob/main/img1.png?raw=true", 
                    description: "Home Page",
                  },
                  {
                    url: "https://github.com/levideutsch/react-phase-2-project/raw/main/img2.png", 
                    description: "New Listing",
                  },
                  {
                    url: "https://github.com/levideutsch/react-phase-2-project/raw/main/img3.png", 
                    description: "De-Listed Page",
                  },
                ],
            },
            {
              id: 4,
              title: "News App",
              shortDescription: "A Platform For Writers To Publish Articles And Connect With Readers",
              imageUrl: "https://i.imgur.com/xHtY1jF.png",
              languages: [<FaPython  size="25" style={{ margin: "0 10px" }} />, <DiDjango size="25" style={{ margin: "0 10px" }} />, <FaReact size="25" style={{ margin: "0 10px" }} />],
              description: `A dynamic news platform that allows users to read, comment, and connect with writers.
                            Writers can create, edit, and manage their own articles with images, while admins have
                            full control over writer approvals and a custom-built admin dashboard. The app also features
                            user profiles for seamless interaction and networking. Built with React and Django Rest Framework,
                            this app showcases my journey from zero knowledge of Django to developing a fully functional backend, 
                            including integrating Django’s email service. Future updates will introduce advanced algorithms to deliver
                            personalized content for readers.`,
              detailedOverview: null,
              links:  [
                {gitHub: "https://github.com/levideutsch/news-app"},
                {youTube: "Not Yet Created"}
              ],
              images: [
                {
                  url: "https://i.imgur.com/xHtY1jF.png", 
                  description: "Home Page",
                },
                {
                  url: "https://i.imgur.com/aspKmOz.png", 
                  description: "Single Tag/ Category",
                },
                {
                  url: "https://i.imgur.com/5Honaqa.png", 
                  description: "Single Article",
                },
                {
                  url: "https://i.imgur.com/8FPu6Jw.png", 
                  description: "Single Article Bottom View",
                },
                {
                  url: "https://i.imgur.com/a7tNKDT.png", 
                  description: "Article's Comments",
                },
                {
                  url: "https://i.imgur.com/NhEwIUR.png", 
                  description: "Private Profile/ Settings",
                },
                {
                  url: "https://i.imgur.com/I4FvF1h.png", 
                  description: "Writer Request Status",
                },
                {
                  url: "https://i.imgur.com/RxTmYZr.png", 
                  description: "Bottom Nav",
                },
                {
                  url: "https://i.imgur.com/es0Ik2B.png", 
                  description: "Admin Dashboard",
                },
                {
                  url: "https://i.imgur.com/HjJ8Si6.png", 
                  description: "Writer Requests (Admin's End)",
                },
                {
                  url: "https://i.imgur.com/0g6mACq.png", 
                  description: "Writer Mode",
                },
                {
                  url: "https://i.imgur.com/COpxNwW.png", 
                  description: "Writer Mode Bottom",
                },
                {
                  url: "https://i.imgur.com/MI9PHLX.png", 
                  description: "Writer's Published Articles",
                },
                {
                  url: "https://i.imgur.com/8G4jh3L.png", 
                  description: "Public Profile",
                },
                {
                  url: "https://i.imgur.com/cxPIk8a.png", 
                  description: "Register",
                },
              ]
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
