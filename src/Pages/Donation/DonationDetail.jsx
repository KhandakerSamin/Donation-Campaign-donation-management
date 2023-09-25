/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// const DonationDetail = ({ donation }) => {

//     const { id, img, picture, title, category, category_bg, card_bg, text_color, description, price } = donation || {}

//     console.log(donation);
//     console.log(donation.img);
//     return (
//         <div>
//             <div className="relative">
//                 <div
//                     className="bg-cover bg-center h-[75vh]"
//                     style={{ backgroundImage: `url(${picture})` }}
//                 >
//                     <div className="bg-opacity-0 bg-white h-full w-full absolute top-0 left-0"></div>
//                     <div className="absolute bottom-16 md:bottom-10 lg:bottom-16 left-28 lg:left-32 transform -translate-x-1/2 flex items-center">
//                         <div className="bg-slate-600 w-full h-24 ">
//                         <button style={{ backgroundColor: text_color }} className="text-white text-xl font-bold px-4 py-2 rounded-md">
//                             Donate $ {price} {/* Embed the price dynamically */}
//                         </button>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             <div>
//                 <div>
//                     <h1 className="text-4xl font-bold text-black mt-10 mb-6">{title}</h1>
//                 </div>
//                 <p className="mb-28">{description}</p>
//             </div>
//         </div>

//     );
// };

// export default DonationDetail;


const DonationDetail = ({ donation }) => {
    const { id, img, picture, title, category, category_bg, card_bg, text_color, description, price } = donation || {};

    return (
        <div>
            <div className="relative">
                <div
                    className="bg-cover bg-center h-[75vh]"
                    style={{ backgroundImage: `url(${picture})` }}
                >
                    <div className="bg-slate-600 opacity-50 h-24 w-full absolute bottom-0 left-0"></div>
                    <div className="absolute bottom-6 md:bottom-8 lg:bottom-7 left-28 lg:left-32 transform -translate-x-1/2 flex items-center">
                        <button style={{ backgroundColor: text_color }} className="text-white text-xl font-bold px-4 py-2 rounded-md">
                            Donate $ {price} {/* Embed the price dynamically */}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-4xl font-bold text-black mt-10 mb-6">{title}</h1>
                </div>
                <p className="mb-28">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetail;






