import { Navbar } from "../components/navbar";
export const Home = () =>{
    return(
        <>
            <div className="hero">
                <div className="outer h-fit py-10">
                    <Navbar></Navbar>
                    <div className="w-full flex px-16 p-4">
                        <div className="">
                            <span className="text-3xl text-satoshi text-relieve text-[64px] leading-20 font-black">
                                Revolutionize the way you save and grow your wealth
                            </span> 
                        </div>
                        <div>
                            <img src={} alt="" />
                        </div>
                    </div>
                </div> 
            </div>
            
        </>
    )
}