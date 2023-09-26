
const DPCard = ({donation}) => {
    const { id, img, picture, title, category, category_bg, card_bg, text_color, description, price } = donation || {};
    return (
        <div style={{backgroundColor: card_bg}} className="flex w-full rounded-lg ">
            <div className="w-32 h-full md:h-40 lg:h-48 lg:w-5/12 md:w-1/3 ">
            <img className="w-screen h-full rounded-l-xl" src={picture} alt="" />
            </div>
            <div style={{card_bg}} className=" ml-5">
                <div style={{backgroundColor:category_bg, color:text_color}} className="mt-3 lg:mt-6 px-3 py-1 w-fit text-center rounded-lg font-semibold">
                    <h1>{category}</h1>
                </div>
                <h1 className="font-semibold text-xl lg:text-2xl text-black my-1 lg:my-2">{title}</h1>
                <p style={{color:text_color}} className="font-semibold">$ {price}</p>
                <button style={{backgroundColor:text_color}} className="px-4 py-2 rounded-lg text-white font-semibold mt-1 mb-3 lg:mt-3">View Details</button>
            </div>
        </div>
    );
};

export default DPCard;