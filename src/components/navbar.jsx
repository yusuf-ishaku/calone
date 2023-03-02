export const Navbar = () =>{
    return(
        <>
            <div className="w-auto flex fly mx-16 py-8  h-fit">
                <span className="block w-fit text-xl text-zen">Caleon</span>
                <div className="w-fit flex ml-auto items-center text-lg text-relieve text-satoshi">
                    <span className="block mx-3">Invest</span>
                    <span className="block mx-3">
                        Save
                    </span>
                    <span className="block mx-3">Blog</span>
                    <span className="block mx-3">Features</span>
                    <span className="block mx-3">
                        Contact Us
                    </span>
                    <div className="w-fit flex items-center ml-6">
                        <span className="block mx-3">
                            Log In
                        </span>
                        <span className="block mx-3">
                            <button className="w-fit text-blue-100 border-1 rounded-full p-2 px-4">
                                Start Investing
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}