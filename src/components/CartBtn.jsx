const CartBtn = () => {
    const name = "My Cart";
    return (
        <>
            <div className="nav-btn">
                <button className="border rounded-md border-black p-2 hover:bg-black hover:text-white">{name}</button>
            </div>
        </>
    )
}
export default CartBtn;