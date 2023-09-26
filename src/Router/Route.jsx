import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "./Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationPage from "../Pages/DonationPage/DonationPage";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/donations',
                element:<DonationPage></DonationPage>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path: '/donation/:id',
                element:<Donation></Donation>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default myCreatedRoute;