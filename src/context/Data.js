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
                <FaReact size="40" style={{ margin: "0 10px" }}/>,
                <SiRubyonrails size="40" style={{ margin: "0 10px" }}/>,
                <SiPostgresql size="37" style={{ margin: "0 10px" }}/>,
                <GrHeroku size="37" style={{ margin: "0 10px" }}/>
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
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744492/siHomePageWithSideBar_gf3do2.png",
                  description: "Main Home Page With Side Navigation Bar"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744493/siXlFormat_eygkrx.png",
                  description: "Main Home Page Table View"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744494/siSingleProductpage_sz81to.png",
                  description: "Single Product Page"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744491/siAdjustcaseQuantity_uf382b.png",
                  description: "Manually Adjust Products Inventory State"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744493/siViewLogs_cj0sqw.png",
                  description: "View Products Transaction History"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744492/siSingleProductExpandPurchaseOrders_l7mjjw.png",
                  description: "View Products Individual Purchase Orders And Invoices"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744495/siPurchaseOrderHistory_v8damr.png",
                  description: "All Completed Purchase Orders"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744494/siSinglePurchaseOrder_ol6ahi.png",
                  description: "Single Purchase Order"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744492/siCurrentInvoicesPage_hngwtz.png",
                  description: "All Current Invoices"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744492/siSingleInvoicePage_gprt6y.png",
                  description: "Single Invoice"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744492/siAnalyticsPage_wmzvsn.png",
                  description: "Analytics To View All Data Related To All Products"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744492/siInventoryState_oxese7.png",
                  description: "View Inventory State"
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737744492/siProductSearch_nuranr.png",
                  description: "Find Product By Name"
                },
              ],

            },
            {
              id: 2,
              title: "News App",
              shortDescription: "A Platform For Writers To Publish Articles And Connect With Readers",
              imageUrl: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737746082/Screenshot_2025-01-24_at_2.08.13_PM_nrmwap.png",
              languages: [<FaPython  size="40" style={{ margin: "0 10px" }} />, <DiDjango size="40" style={{ margin: "0 10px" }} />, <FaReact size="40" style={{ margin: "0 10px" }} />],
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
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737746082/Screenshot_2025-01-24_at_2.08.13_PM_nrmwap.png", 
                  description: "Home Page",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748748/Screenshot_2025-01-24_at_2.52.44_PM_ubrgln.png", 
                  description: "Single Tag/ Category",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748747/Screenshot_2025-01-24_at_2.53.16_PM_k7miea.png", 
                  description: "Single Article",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748747/Screenshot_2025-01-24_at_2.53.35_PM_bj4e9o.png", 
                  description: "Single Article Bottom View",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737746082/Screenshot_2025-01-24_at_2.09.54_PM_xhe2mq.png", 
                  description: "Article's Comments",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737746082/Screenshot_2025-01-24_at_2.11.11_PM_p9qkgj.png", 
                  description: "Private Profile/ Settings",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748747/Screenshot_2025-01-24_at_2.55.18_PM_cpbh0x.png", 
                  description: "Writer Request Status",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748747/Screenshot_2025-01-24_at_2.55.48_PM_bmyzqd.png", 
                  description: "Bottom Nav",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748747/Screenshot_2025-01-24_at_2.56.10_PM_sfk3me.png", 
                  description: "Admin Dashboard",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748747/Screenshot_2025-01-24_at_2.56.29_PM_xbgv7k.png", 
                  description: "Writer Requests (Admin's End)",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748748/Screenshot_2025-01-24_at_2.57.04_PM_if9dgl.png", 
                  description: "Writer Mode",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748748/Screenshot_2025-01-24_at_2.57.24_PM_faczuw.png", 
                  description: "Writer Mode Bottom",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737748748/Screenshot_2025-01-24_at_2.57.42_PM_wppgvu.png", 
                  description: "Writer's Published Articles",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737746083/Screenshot_2025-01-24_at_2.12.13_PM_fm3a6l.png", 
                  description: "Public Profile",
                },
                {
                  url: "https://res.cloudinary.com/dfc3jd87f/image/upload/v1737746083/Screenshot_2025-01-24_at_2.12.57_PM_xzfdli.png", 
                  description: "Register",
                },
              ]
            },
            {
              id: 3,
              title: 'Yent-Connect',
              shortDescription: "A Social Media Platform",
              imageUrl: 'https://github.com/levideutsch/yent-connect/raw/main/readme_photos/home-page-1.png', // Replace with actual image URLs
              languages: [<FaReact size="40" style={{ margin: "0 10px" }}/>, <SiRubyonrails size="40" style={{ margin: "0 10px" }}/>, <SiPostgresql size="37" style={{ margin: "0 10px" }}/>],
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
                id: 4,
                title: "Not Airbnb",
                shortDescription: "A Property Listing Management Tool",
                imageUrl: "https://github.com/levideutsch/react-phase-2-project/raw/main/img1.png",
                languages: [<FaJsSquare  size="40" style={{ margin: "0 10px" }} />, <VscJson size="40" style={{ margin: "0 10px" }} />],
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
