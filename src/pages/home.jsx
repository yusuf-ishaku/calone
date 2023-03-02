import { Navbar } from "../components/navbar";
export const Home = () =>{
    return(
        <>
            <div className="hero">
                <div className="outer h-[100vh]">
                    <Navbar></Navbar>
                    <div className="w-full">
                        This is the home page
                    </div>
                </div> 
            </div>
            
        </>
    )
}