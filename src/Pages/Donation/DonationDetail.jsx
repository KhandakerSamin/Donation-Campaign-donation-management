/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import swal from 'sweetalert';


const DonationDetail = ({ donation }) => {
    const { id, img, picture, title, category, category_bg, card_bg, text_color, description, price } = donation || {};

    const handleAddDonation = () => {

        const addedDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if (!donationItems) {
            addedDonationArray.push(donation)
            localStorage.setItem('donations', JSON.stringify(addedDonationArray))
            swal("Mashallah!", "You Donated Successfully", "success");
        } else {

            const isExist = donationItems.find(donation => donation.id == id)

            if (!isExist) {
                addedDonationArray.push(...donationItems, donation)
                localStorage.setItem('donations', JSON.stringify(addedDonationArray))
                swal("Mashallah!", "You Donated Successfully!", "success");
            }else{
                swal("Sorry!", "You cant donate in same category twice", "error");
            }
            // addedDonationArray.push(...donationItems, donation)
            // localStorage.setItem('donations', JSON.stringify(addedDonationArray))
            // alert('product added');
        }

        // localStorage.setItem('samin', JSON.stringify([{name:"hasib"},{name:"samin"}]));
    }

    return (
        <div>
            <div className="relative">
                <div
                    className="bg-cover bg-center h-[75vh]"
                    style={{ backgroundImage: `url(${picture})` }}
                >
                    <div className="bg-slate-600 opacity-50 h-24 w-full absolute bottom-0 left-0"></div>
                    <div className="absolute bottom-5 md:bottom-5 lg:bottom-7 left-28 lg:left-32 transform -translate-x-1/2 flex items-center">
                        <button onClick={handleAddDonation} style={{ backgroundColor: text_color }} className="text-white text-xl font-bold px-4 py-2 rounded-md">
                            Donate $ {price} {/* Embed the price dynamically */}
                        </button>
                    </div>
                </div>
            </div>
            <div className='mx-10'>
                <div>
                    <h1 className="text-4xl font-bold text-black mt-10 mb-6">{title}</h1>
                </div>
                <p className="mb-28">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetail;






