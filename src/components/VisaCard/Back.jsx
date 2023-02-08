import { useContext } from "react";
import { StoreContextVisaCard } from "../../App";


const CardBackView = () => {

    const { stateVisaCard } = useContext(StoreContextVisaCard);

    return (
        <div className="w-[425px] h-[270px] bg-card rounded-2xl flex flex-col">
            <div className="h-14 bg-black my-8"></div>
            <div className="flex items-center">
                <div className="h-12 bg-gray-400 w-3/5 ml-4"></div>
                <div className="bg-white w-14 h-8 flex justify-center items-center">{stateVisaCard.cardCVV}</div>
            </div>
        </div>
    )
}

export default CardBackView;