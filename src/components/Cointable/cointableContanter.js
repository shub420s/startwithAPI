export function CoinData(){
    const {data} = useQuery(['coin',page],()=>{fetchCoinData(page,'usd')},{
        cacheTime: 1000 * 60 * 2,
    });
    return(
         data.map(
            (coin)=>{
                return(
                    <div key={coin.id} className="w-full bg-transparent flex py-2 px-2  font-semibold item-center justify-between " >

                        <div className="flex item-center justify-start gap-3 basis-[35%]" >
                            <div className="w-[5rem] h-[5rem]">
                                <img src={coin.image} className="w-full h-full" />
                            </div>
                        </div>

                    </div>
                );
            }
         )
    );
}