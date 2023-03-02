import { Navbar } from "../components/navbar";
import  Star1  from "../assets/Star1.png";
import Star2 from "../assets/Star2.png";
import Star3 from "../assets/Star3.png";
export const Home = () =>{
    return(
        <>
            <div className="hero">
                <div className="outer">
                    <Navbar></Navbar>
                    <div className="w-full h-fit flex px-16 py-16">
                        <div className="w-2/3">
                            <p className="still text-g text-satoshi text-relieve">
                                Revolutionize the way you save and grow your wealth
                            </p> 
                            <p className=" text-md text-relieve text-satoshi">
                            Transform your savings and experience a smarter, more rewarding way to save, with features like budget tracking, goals and rewards, and mobile deposits
                            </p>
                            <span className="block my-4">
                            <button className="w-fit text-satoshi text-blue-100 border-1 rounded-full p-2 px-4">
                                Start Investing
                            </button>
                        </span>
                        </div>
                        <div className="w-1/2 relative">
                            <span className="absolute hidden end top-0 left-0"><img className="" src={Star1} alt="" /></span>
                            <span className="absolute hidde  top-0 left-0 right-0 bottom-0"><img className="" src={Star2} alt="" /></span>
                            <span className="relative body top-0 left-0 right-0 bottom-0"><img className="" src={Star3} alt="" /></span>
                        </div>
                    </div>
                </div> 
                <div className="w-full h-fit p-16">
                    <div className="w-auto h-fit">
                        <span className="block w-full h-full still tracking-wide text-satoshi font-extrabold text-3xl">Investing with Calone</span>
                        <span className="block">
                            At Calone, we believe that everyone should have access to smart, effortless savings. That's why we've created a savings platform that makes it easy for you to grow your wealth, without sacrificing your lifestyle.
                        </span>
                    </div>
                </div>
            </div>
            
        </>
    )
}