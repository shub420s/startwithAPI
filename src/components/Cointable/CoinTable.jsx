import { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQueries, useQuery } from "react-query";




function CoinTable(){

    const [page,setPage] = useState(1);
   
    const {data,isLoading,isError,error} = useQuery(['coin',page],()=>fetchCoinData(page,'usd'),{
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000* 60 * 2,
    });

    // if (isLoading) {
    //     return <div>...Loding</div>;
    // }

    if (isError) {
        return <div> Error: {error.message} </div>
    }

    return(
        <div className="my-5 flex flex-col item-center justify-center gap-5 w-[80vw] mx-auto" >

            <div className="w-full flex py-2 px-2 font-semibold item-center" >
                {/* Heading of the Table */}
                <div className="basis-[35%]">
                    Coin
                </div>

                <div className="basis-[25%]">
                    Price
                </div>

                <div className="basis-[20%]">
                    24hr changing
                </div>

                <div className="basis-[20%]">
                    Market Cap
                </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div>...Loding</div>}
                {data && data.map((coin) => {
                    return(
                        <div key={coin.id} className="w-full bg-transparent flex py-2 px-2  font-semibold item-center justify-between " >

                            <div className="flex item-center justify-start gap-3 basis-[35%]" >

                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" />
                                </div>

                                <div className="flex flex-col" >
                                    
                                    <div className="text-3xl" >
                                        {coin.name}
                                    </div>

                                    <div className="text-xl">
                                        {coin.symbol}
                                    </div>


                                </div>


                            </div>

                            <div className="basis-[25%]" >
                                {coin.high_24h}
                            </div>

                            <div className="basis-[20%]" >
                                {coin.price_change_24h}
                            </div>

                            <div className="basis-[20%]" >
                                {coin.market_cap}
                            </div>
                        </div>
                    );
                })}

            </div>

            <div>
                <button 
                disabled = {page === 1}
                onClick={()=>{setPage(page-1)}}
                className="btn btn-primary btn-wide text-white text-2xl">
                  Prev 
                </button>
                
                <button 
                onClick={()=>{setPage(page+1)}}
                className="btn btn-secondary btn-wide text-white text-2xl">
                Next
                </button>
            </div>

        </div>
    )
}

export default CoinTable;