/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const DonationCard = ({donation}) => {
    const {id, picture, title, category, category_bg, card_bg, text_color, description, price} = donation || {}
    return (
        <Link to={`/donation/${id}`}>
                <div style={{backgroundColor:card_bg}} className={` h-full w-80 rounded-xl mx-12 `}>
            <img className='h-44 w-80' src={picture} alt="" />
            <div className=' p-4'>
                <div style={{color:text_color, backgroundColor:category_bg}} className={`h-7 w-fit  px-3 rounded-lg  font-medium`}>{category}</div>
            <h1 style={{color:text_color}} className={`text-xl font-semibold `}>{title}</h1>
            </div>
       
        </div>
        </Link>
    );
};

export default DonationCard;