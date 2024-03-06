import "../styles/CommonStyles.css"
import "../styles/Highlights.css"

import MenuCard from "./MenuCard"

export default function Highlights() {
    const menuData = [
        {
            id: 1,
            url: require("../assets/images/greek salad.jpg"),
            name: "Greek salad",
            price: "$12.99",
            details : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        },
        {
            id: 2,
            url: require("../assets/images/bruschetta.jpg"),
            name: "Bruchetta",
            price: "$ 5.99",
            details: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        },
        {
            id: 3,
            url: require("../assets/images/lemon dessert.jpg"),
            name: "Lemon Dessert",
            price: "$ 5.00",
            details: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        }
    ]
    return (
        <section className="wrapper highlights">
            <div className="highlights-content">
                <div className="highlights-header">
                    <h1>Specials</h1>
                    <button>Online Menu</button>
                </div>
                <div className="highlights-menu">
                    {
                        menuData.map(item => 
                        <MenuCard 
                            id={item.id} 
                            url={item.url} 
                            name={item.name} 
                            price={item.price} 
                            details={item.details} 
                        />)
                    }
                </div>
            </div>

        </section>
    )
}