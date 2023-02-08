import { useContext } from "react";
import { StoreContextVisaCard } from "../../App";


const UserForm = () => {

    const { dispachVisaCard } = useContext(StoreContextVisaCard);

    return(
        <form className="w-3/4 bg-white shadow-lg rounded-2xl flex flex-col">
            <div className="flex flex-col px-16 py-4">
                <label htmlFor="cardNumber" className="uppercase text-sm mb-2 text-gray-500 font-medium">Card Number</label>
                <input onChange={(e) => dispachVisaCard({ type: "change", propertId: "cardNumber", value: e.target.value })} className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" type="text" name="cardNumber" id="cardNumber"/>
            </div>
            <div className="flex flex-col px-16 py-4">
                <label htmlFor="cardHolder" className="uppercase text-sm mb-2 text-gray-500 font-medium">Card Number</label>
                <input onChange={(e) => dispachVisaCard({ type: "change", propertId: "cardHolder", value: e.target.value }) } className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" type="text" name="cardHolder" id="cardHolder"/>
            </div>
            <div className="flex justify-between px-16 py-4">
                <div className="w-1/4 flex flex-col">
                    <label htmlFor="cardMM" className="uppercase text-sm mb-2 text-gray-500 font-medium">Expiration MM</label>
                    <input onChange={(e) => dispachVisaCard({ type: "change", propertId: "cardMM", value: e.target.value })} className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" type="text" name="cardMM" id="cardMM"/>
                </div>
                <div className="w-1/4 flex flex-col">
                    <label htmlFor="cardYY" className="uppercase text-sm mb-2 text-gray-500 font-medium">Expiration YY</label>
                    <input onChange={(e) => dispachVisaCard({ type: "change", propertId: "cardYY", value: e.target.value })} className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" type="text" name="cardYY" id="cardYY"/>
                </div>
                <div className="w-1/4 flex flex-col">
                    <label htmlFor="cardSVV" className="uppercase text-sm mb-2 text-gray-500 font-medium">CVV</label>
                    <input 
                        onChange={(e) => dispachVisaCard({ type: "change", propertId: "cardCVV", value: e.target.value })} 
                        onFocus={() => dispachVisaCard({ type: "change", propertId: "cardView", value: "Back" })} 
                        onBlur={() => dispachVisaCard({ type: "change", propertId: "cardView", value: "Front" })} 
                        className="border border-gray-500 rounded-lg focus:outline-none px-4 py-2" 
                        type="text" 
                        name="cardSVV" 
                        id="cardSVV"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center px-16 py-4">
                <button type="submit" className="bg-sky-700 rounded-xl text-white uppercase px-24 py-2 hover:bg-sky-600">Submit</button>
            </div>
        </form>
    )
}

export default UserForm;