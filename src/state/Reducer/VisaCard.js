import { visaCardState } from "../State/VisaCard";

export function visaCardReducer(state, action){
    switch (action.type) {
        case "change":  
            return { ...state, [action.propertId]: action.value};
        case "reset":
            return visaCardState;
        default:

            break;
    }

}