import server_down from "../assets/server_down.svg"
const Grocery = () => {
    return <>
        <div className="">
            <img src={server_down} alt="" />
            <p className="font-bold border border-black text-black p-5 rounded-lg text-center my-10 text-xl animate-bounce">OOPS!</p>
        </div>
    </>
}
export default Grocery