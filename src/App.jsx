import { useState } from "react"
import { CurrencyContext } from "./context/currencyContext";
import HomePage from "./pages/HomePage";

function App() {

  const [currency,setCurrency] = useState('usd');
 

  return (
   <>
   <CurrencyContext.Provider value={{currency,setCurrency}} >
    <HomePage/>
   </CurrencyContext.Provider>
   </>
  )
}

export default App
