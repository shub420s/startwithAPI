export function CoinData(){
    const {data} = useQuery(['coin',page],()=>{fetchCoinData(page,'usd')},{
        cacheTime: 1000 * 60 * 2,
    });
    return(
         {data.map()}
    );
}