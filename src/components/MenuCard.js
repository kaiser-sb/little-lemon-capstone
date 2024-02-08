import bike from "../assets/images/delivery_bike.svg"
import "../styles/MenuCard.css"

export default function MenuCard(props) {
    return(
        <section className="menu-card">
            <div className="menu-card-image">
                <img src={props.url} alt="Dish" />
            </div>
            <div className="menu-card-content">
                <div className="menu-card-header">
                    <p className="menu-card-dish-name"><b>{props.name}</b></p>
                    <p className="menu-card-dish-price">{props.price}</p>
                </div>
                <div className="menu-card-details">
                    <p className="menu-card-dish-details">{props.details}</p>
                </div>
                <div className="menu-card-order">
                    <p><b>Order a delivery</b>   <img src={bike} alt="Delivery bike" /></p>
                </div>
            </div>
            
        </section>
    )
}