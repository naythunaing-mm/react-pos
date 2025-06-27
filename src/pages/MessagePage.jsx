import Message from "../assets/Message.svg"
const MessagePage = () => {
    return (
        <>
            <div className="">
                <img src={Message} alt="" />
                <p className="font-bold border border-black text-black p-5 rounded-lg text-center my-10 text-xl animate-bounce">OOPS!</p>
            </div>
        </>
    )
}
export default MessagePage