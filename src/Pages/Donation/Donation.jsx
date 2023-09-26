import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "./DonationDetail";

const Donation = () => {
    const [donation , setDonation] = useState({});
    const {id} = useParams();
    // console.log(id);
    const donations = useLoaderData();
    // console.log(donations);
    useEffect(() => {
        const findDonation = donations?.find((donation) => donation.id == id);
        setDonation(findDonation);
    },[id, donations]);
    // console.log(donation);
    return (
  <div>
    <DonationDetail donation={donation} ></DonationDetail>
  </div>
    );
};

export default Donation;


