import { Navbar } from "../components/navbar";
import  Star1  from "../assets/Star1.png";
import Star2 from "../assets/Star2.png";
import Star3 from "../assets/Star3.png";
export const Home = () =>{
    return(
        <>
            <div className="hero">
                <div className="outer  py-10">
                    <Navbar></Navbar>
                    <div className="w-full flex px-16 p-4">
                        <div className="w-1/2">
                            <span className="text-3xl tracking-widest text-satoshi text-relieve text-[64px] leading-20 font-black">
                                Revolutionize the way you save and grow your wealth
                            </span> 
                        </div>
                        <div className="w-1/2 relative">
                            <img className="absolute hidden top-0 left-0" src={Star1} alt="" />
                            <img className="absolute hidden top-0 left-0 right-0 bottom-0" src={Star2} alt="" />
                            <img className="relative hidden top-0 left-0 right-0 bottom-0" src={Star3} alt="" />
                        </div>
                    </div>
                </div> 
            </div>
            
        </>
    )
}