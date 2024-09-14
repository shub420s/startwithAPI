import { useState } from "react"
import { CurrencyContext } from "./context/currencyContext";
import HomePage from "./pages/HomePage";
import Routing from "./components/Routing/Routing";

function App() {

  const [currency,setCurrency] = useState('usd');
 

  return (
   <>
   {/* <CurrencyContext.Provider value={{currency,setCurrency}} > */}
    {/* <HomePage/> */}
   {/* </CurrencyContext.Provider> */}
    <Routing/>
   </>
  )
}

export default App
