import "../styles/CommonStyles.css"
import "../styles/Testimonials.css"

import ReviewCard from "./ReviewCard"

export default function Testimonials() {
    const reviewData = [
        {
            id: 1,
            rating: 5,
            image: require("../assets/images/Cust_2.jpg"),
            name: "Sara Lopez",
            userId: "i_am_sarah",
            review: "“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”",
        },
        {
            id: 2,
            rating: 5,
            image: require("../assets/images/Cust_4.jpg"),
            name: "John Doe",
            userId: "Johnny_Utah",
            review: "“We had such a great time celebrating my grandmother's birthday!”",
        },
        {
            id: 3,
            rating: 5,
            image: require("../assets/images/Cust_3.jpg"),
            name: "Jane Garcia",
            userId: "Jane72",
            review: "“Best Feta Salad in town. Flawless everytime!”",
        },
        {
            id: 4,
            rating: 5,
            image: require("../assets/images/Cust_1.jpg"),
            name: "Park Ian",
            userId: "foodie_wanderer",
            review: "“Such a chilled out atmosphere - love it!”",
        },
    ]
    return (
        <section className="testimonials">
            <div className="container wrapper">
                <h1>Testimonials</h1>
                <div className="reviews">
                    {
                        reviewData.map(
                            item => <ReviewCard rating= {item.rating}
                                                image= {item.image}
                                                name= {item.name}
                                                userId= {item.userId}
                                                review= {item.review}
                                    />)
                    }
                </div>
            </div>
            
        </section>
    )
}
