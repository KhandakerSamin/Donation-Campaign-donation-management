import { useEffect, useState } from "react";
import DPCard from "./DPCard";

const DonationPage = () => {

    const [isShowAll, setIsShowAll] = useState(false) 

    const [donations, setDonations] = useState([])

    const [noDonation, setNoDonation] = useState('')

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'))
        if (donationItems) {
            setDonations(donationItems);
        }else{
           setNoDonation("No Donaions Here")
        }
    },[])

    console.log(isShowAll);

    return (
        <div>
           {noDonation? <h1 className="h-[80vh] flex justify-center items-center text-3xl font-bold">{noDonation}</h1> : <div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 mt-16 gap-y-6 mx-12 mb-6">
                {
                    isShowAll ? donations.map((donation) =>( <DPCard key={donation.id} donation={donation}></DPCard>)) 
                    :
                    donations.slice(0,4).map((donation) =>( <DPCard key={donation.id} donation={donation}></DPCard>))
                }
            </div>
                <div className="flex justify-center items-center">
                {
                    donations.length > 4 && <button onClick={() => setIsShowAll(!isShowAll)} className="bg-green-700 text-white px-4 py-2 rounded-lg mt-5 mb-16">{isShowAll? "Show less" : "See All"}</button>
                }
                </div>
            </div>}

        </div>
    );
};

export default DonationPage;