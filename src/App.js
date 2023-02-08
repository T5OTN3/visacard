import { createContext, useReducer } from "react";
import UserForm from "./components/From";
import CardBackView from "./components/VisaCard/Back";
import CardFrontView from "./components/VisaCard/Front";
import { visaCardReducer } from "./state/Reducer/VisaCard";
import { visaCardState } from "./state/State/VisaCard";

export const StoreContextVisaCard = createContext({})

function App() {

  const [stateVisaCard, dispachVisaCard] = useReducer(visaCardReducer, visaCardState);

  return (
    <StoreContextVisaCard.Provider value={{ stateVisaCard, dispachVisaCard }}>
      <div className="h-screen flex flex-col justify-center items-center">
        {stateVisaCard?.cardView === "Front" && <CardFrontView />}
        {stateVisaCard?.cardView === "Back" && <CardBackView />}
        <UserForm />
      </div>
    </StoreContextVisaCard.Provider>
  );
}

export default App;
