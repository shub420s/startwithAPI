import { useEffect, useState } from "react";

function demoCode(){

    const [count,setCount] = useState(0);

    const [flag,setFlag] = useState(false);
    

    async function download() {
        const response = await fetch("https://api.coingecko.com/api/v3/ping");
        console.log(response);
        const result = await response.json();
        console.log(result);
    }

    useEffect(()=>{
        download();
    },[count]);

    useEffect(()=>{
        console.log("Flage is Change")
    },[flag]);


    return(
        <>
        <h1 className="text-center" >Crypto Traker</h1>
         CoinTable
         {count}
         <br />
         <button onClick={()=>{setCount(count + 1)}} >Increment</button>
         <br />
         {flag && <div>Flag is true</div>}
         <button onClick={()=>{setFlag(!flag)}} >Toggle</button>
        </>
    )
}
 