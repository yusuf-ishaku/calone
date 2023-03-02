import Icon from "../assets/Icon.png";
export const AuthCards = (props) =>{
    return(
        <>
            <div className="w-auto">
                <img className="my-2" src={Icon} alt="" />
                <h3 className="block my-2 text-satoshi still text-xl font-black">{props.tag}</h3>
                <p className="my-2 text-satoshi text-relieve text-lg">{props.info}</p>
            </div>
        </>
    )
}