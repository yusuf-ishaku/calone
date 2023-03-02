import { Navbar } from "../components/navbar";
import  Star1  from "../assets/Star1.png";
import Star2 from "../assets/Star2.png";
import Star3 from "../assets/Star3.png";
import Bubbles from "../assets/Bubbles.png";
import Budget from "../assets/Budget.png";
import BudgetTHover from "../assets/BudgetTHover.png";
import Secure from "../assets/Secure.png";
import SecureTHover from "../assets/SecureTHover.png";
import Goal from "../assets/Goal.png";
import GoalTHover from "../assets/GoalTHover.png";
import { useState } from "react";
export const Home = () =>{
    const[mike, setMike] = useState(true);
    const [ju, setJu] = useState(true);
    const [mi, setMi] = useState(true)
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
                        <span className="block w-full h-full still tracking-wide text-satoshi font-black text-2xl">Investing with Calone</span>
                        <span className="block text-lg my-3 w-1/2 leading-9 text-satoshi text-relieve">
                            At Calone, we believe that everyone should have access to smart, effortless savings. That's why we've created a savings platform that makes it easy for you to grow your wealth, without sacrificing your lifestyle.
                        </span>
                    </div>
                </div>
                <div className="w-full -mt-52">
                        <img src={Bubbles} alt="" />
                </div>
                <div className="w-full h-fit p-16">
                    <div className="w-auto h-fit">
                        <span className="block w-full h-full still tracking-wide text-satoshi font-black text-2xl">You are our only priority</span>
                        <span className="block text-lg my-3 w-1/2 leading-9 text-satoshi text-relieve">
                        Making Your Money Work Harder for You and Reach Your Financial Dreams Sooner.
                        </span>
                    </div>
                    <div className="flex gap-8 w-full my-6">
                        <div className="w-[30%] rounded-xl h-[500px] hover:border-gray-600 flit border-1" onMouseOver={() =>{setMike(false)}} onMouseOut= {() =>{setMike(true)}}  alt="">
                            <div className="h-1/2 relative">
                                <img className="absolute object-cover rounded-md" src={ mike ? Budget : BudgetTHover}  /> 
                            </div>
                            <div className="text-satoshi px-4">
                                <h3 className="text-xl font-bold still">Budget Tracking</h3>
                                <p className="text-md py-2 text-relieve">
                                    Stay on top of your finances with budget tracking feature. Our app will help you keep track of your spending and savings, so you can make informed decisions about your finances.
                                </p>
                                <span className="block my-4">
                                    <button className="w-fit bn text-satoshi text-blue-100 border-1 rounded-full p-2 px-4">
                                        Read More
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="w-[30%] rounded-xl h-[500px] hover:border-gray-600 flit border-1" onMouseOver={() =>{setJu(false)}} onMouseOut= {() =>{setJu(true)}}>
                            <div className="h-1/2 relative">
                                <img className="absolute object-cover rounded-md" src={ ju ? Secure : SecureTHover}   alt="" /> 
                            </div>
                            <div className="text-satoshi px-4">
                                <h3 className="text-xl font-bold still">Secure and Insured</h3>
                                <p className="text-md py-2 text-relieve">
                                Feel confident about your savings with Calone finance. Our digital platform is fully secure and insured, so your money is always safe and protected.
                                </p>
                                <span className="block my-4">
                                    <button className="w-fit bn text-satoshi text-blue-100 border-1 rounded-full p-2 px-4">
                                        Read More
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="w-[30%] rounded-xl h-[500px] hover:border-gray-600 flit border-1" onMouseOver={() =>{setMi(false)}} onMouseOut= {() =>{setMi(true)}}  >
                            <div className="h-1/2 relative">
                                <img className="absolute object-cover rounded-md" src={ mi ? Goal : GoalTHover} alt="" /> 
                            </div>
                            <div className="text-satoshi px-4">
                                <h3 className="text-xl font-bold still">Goals and Rewards</h3>
                                <p className="text-md py-2 text-relieve">
                                Stay motivated to save with Calone goals and rewards system. Set your savings goals, track your progress, and earn rewards for reaching your milestones.
                                </p>
                                <span className="block my-4">
                                    <button className="w-fit bn text-satoshi text-blue-100 border-1 rounded-full p-2 px-4">
                                        Read More
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}