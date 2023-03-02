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
import { AuthCards } from "../components/authCards";
import Zig from "../assets/Zig.png";
export const Home = () =>{
    const[mike, setMike] = useState(true);
    const [ju, setJu] = useState(true);
    const [mi, setMi] = useState(true)
    return(
        <>
            <div className="hero p-10">
                <div className="outer">
                    <Navbar></Navbar>
                    <div className="w-full h-fit flex flex-col-reverse sm:flex-row px-2 sm:px-16 py-16">
                        <div className="w-full md:w-2/3">
                            <p className="still leading-10 h-fit  font-black sm:text-g text-satoshi text-relieve">
                                Revolutionize the way you save and grow your wealth
                            </p> 
                            <p className="text-md text-relieve text-satoshi">
                            Transform your savings and experience a smarter, more rewarding way to save, with features like budget tracking, goals and rewards, and mobile deposits
                            </p>
                            <span className="block my-4">
                                <button className="w-fit text-satoshi text-blue-100 border-1 rounded-full p-2 px-4">
                                    Start Investing
                                </button>
                            </span>
                        </div>
                        <div className="w-full my-2 sm:my-0 sm:w-1/2 relative">
                            <span className="absolute hidden end top-0 left-0"><img className="" src={Star1} alt="" /></span>
                            <span className="absolute hidde  top-0 left-0 right-0 bottom-0"><img className="" src={Star2} alt="" /></span>
                            <span className="relative body top-0 left-0 right-0 bottom-0"><img className="" src={Star3} alt="" /></span>
                        </div>
                    </div>
                </div> 
                <div className="w-full h-fit p-1 sm:p-16">
                    <div className="w-auto h-fit">
                        <span className="block w-full h-full still tracking-wide text-satoshi font-black text-xl sm:text-2xl">Investing with Calone</span>
                        <span className="block text-lg my-3 w-full sm:w-1/2 leading-9 text-satoshi text-relieve">
                            At Calone, we believe that everyone should have access to smart, effortless savings. That's why we've created a savings platform that makes it easy for you to grow your wealth, without sacrificing your lifestyle.
                        </span>
                    </div>
                </div>
                <div className="w-full  md:-mt-52">
                        <img className="" src={Bubbles} alt="" />
                </div>
                <div className="w-full h-fit p-1 md:p-16">
                    <div className="w-auto h-fit">
                        <span className="block w-full h-full still tracking-wide text-satoshi font-black text-xl sm:text-2xl">You are our only priority</span>
                        <span className="block text-lg my-3 w-full md:w-1/2 leading-9 text-satoshi text-relieve">
                        Making Your Money Work Harder for You and Reach Your Financial Dreams Sooner.
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 w-full my-6">
                        <div className="w-full sm:w-[30%] rounded-xl h-[500px] hover:border-gray-600 flit border-1" onMouseOver={() =>{setMike(false)}} onMouseOut= {() =>{setMike(true)}}  alt="">
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
                        <div className="w-full sm:w-[30%] rounded-xl h-[500px] hover:border-gray-600 flit border-1" onMouseOver={() =>{setJu(false)}} onMouseOut= {() =>{setJu(true)}}>
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
                        <div className="w-full sm:w-[30%] rounded-xl h-[500px] hover:border-gray-600 flit border-1" onMouseOver={() =>{setMi(false)}} onMouseOut= {() =>{setMi(true)}}  >
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
                <div className="p-1 sm:p-16 w-full h-fit">
                    <div className="w-auto h-fit">
                        <span className="block w-full h-full still tracking-wide text-satoshi font-black text-xl md:text-2xl">What we offer</span>
                        <span className="block text-lg my-3 w-full md:w-1/2 leading-9 text-satoshi text-relieve">
                        Making Your Money Work Harder for You and Reach Your Financial Dreams Sooner.
                        </span>
                    </div>
                    <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-8 md:grid-rows-2">
                        <AuthCards tag="Round-Up Savings" info="Make saving a habit with our round-up savings feature. We'll round up your purchases to the nearest dollar and automatically transfer the change to your savings account."></AuthCards>
                        <AuthCards tag="24/7 Access" info="Take control of your savings with 24/7 access. Check your account balance, track your progress, and manage your savings anytime, anywhere with our user-friendly app and website."></AuthCards>
                        <AuthCards tag="High Interest Rates" info="Earn more on your savings with Calone high interest rates. Our rates are competitive and transparent, with no hidden fees."></AuthCards>
                        <AuthCards tag="Mobile Deposits" info="Deposit your money from anywhere, anytime with mobile deposit feature. Simply take a photo of your check with your smartphone and deposit it directly into your savings account."></AuthCards>
                        <AuthCards tag="High Interest Rates" info="Earn more on your savings with Calone high interest rates. Our rates are competitive and transparent, with no hidden fees."></AuthCards>
                    </div>
                </div>
                <div className="w-auto my-2 px-4 flex flex-col-reverse sm:flex-row h-fit sm:h-80 rounded-xl cover sm:mx-16 border-gray-600 border-1 mb-10">
                    <div className="flex flex-col justify-center w-full sm:w-3/5 my-4 sm:my-0">
                        <h1 className="still hi w-full text-satoshi text-2xl md:text-[40px] font-black ">
                            Empower Your Finances and Transform Your Savings
                        </h1>
                        <span className="block my-3">
                            <button className="w-40 bn text-blue-100 border-1 rounded-full p-2 px-4">
                                Start Investing
                            </button>
                        </span>
                    </div>
                    <div className="w-auto">
                        <img className="w-auto object-cover" src={Zig} alt="" />
                    </div>
                </div>
            </div>
            
        </>
    )
}