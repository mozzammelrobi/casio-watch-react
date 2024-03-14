

const Watches = ({watch,addToCart}) => {
    const {watch_name,img,id, description}= watch
    // console.log(watch)

    return (
        <div>
            <div className="card  shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{watch_name}</h2>
                    <p>{description}</p>
                    <div className="card-actions flex w-full">
                        <button onClick={()=>addToCart(watch)} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Watches;