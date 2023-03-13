import "./ItemCard.css";


function ItemCard(){
    return (
        <div className="card">
            <div className="img-field">
                <div className="card-img"></div>
            </div>
            <CardInfo></CardInfo>
        </div>
    );
}

function CardInfo(){
    return(
        <div className="info-field">
                <p className="item-name">Cube</p>
                <p className="price">$19.99</p>
                <div className="to-cart-button-container"> 
                    <button className="to-cart-button">add to cart</button>
                </div>
        </div>
    );
}

export default ItemCard;