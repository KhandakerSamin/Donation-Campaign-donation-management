import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner";
import AllDonations from "../Components/Donations/AllDonations";

const Home = () => {
    const donations = useLoaderData()
    return (
        <div>
            <div>
                <Banner></Banner>
                <AllDonations donations={donations}></AllDonations>
            </div>
        </div>
    );
};

export default Home;