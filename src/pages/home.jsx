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
                        <div className="w-2/3">
                            <p className="still text-g text-satoshi text-relieve">
                                Revolutionize the way you save and grow your wealth
                            </p> 
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