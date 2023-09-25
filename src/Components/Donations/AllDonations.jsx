/* eslint-disable react/prop-types */
import DonationCard from "./DonationCard";

const AllDonations = ({donations}) => {
    return (
        <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
            {
                donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    </div>
    );
};

export default AllDonations;