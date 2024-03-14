const Cart = ({ cart,removeCart }) => {
    // console.log(removeCart)

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold">Total cart: {cart.length}</h1>
            {
                cart.map((card,idx) => <Card
                 key={idx} 
                 card={card}
                 removeCart={removeCart}
                 ></Card>)
            }

        </div>
    );
};
function Card({ card,removeCart }) {
    // console.log(card)
    return (
        <div className=" my-4">
            <p className="text-3xl  p-4 bg-purple-600 rounded">{card.watch_name}</p>
            <button onClick={()=>removeCart(card.id)} className="btn btn-primary"> Remove</button>
        </div>
    )

}


export default Cart;
