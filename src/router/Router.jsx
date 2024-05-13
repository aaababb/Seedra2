import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AllPro from "../pages/Allproducts/AllPro";
import AboutPage from "../pages/AboutPage/AboutPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";


export const router =createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    errorElement:<NotFound/>,
    children:[
        {
           path:"/",
           element:<HomePage/> 
        },
        {
            path:"/about",
            element:<AboutPage/>
        },
        {
            path:"/all",
            element:<AllPro/>
        },
        {
            path:"/blog",
            element:<BlogPage/>
        },
        {
            path:"/contacts",
            element:<ContactPage/>
        },
        
    ]
}])