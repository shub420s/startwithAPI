import BannerImage from "../../assets/Banner.jpeg"

function Banner(){
    return(
        <div className="w-full h-[25rem] relative" >
            <img src={BannerImage} className="w-full h-full"/>
            <div className="absolute top-20 left-0 right-0 mx-auto w-[30rem]">
                  <div className="flex flex-col gap-4">


                    <div className="font-semibold text-7xl text-yellow text-center">
                        Welcome
                    </div>

                    <div className="font-semibold text-5xl text-yellow text-center">
                        Track your crypto
                    </div>


                  </div>
            </div>
        </div>
    )
}

export default Banner;