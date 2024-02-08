import "../styles/ReviewCard.css"

export default function ReviewCard(props) {
    let starArr = []
    for (let i= 0; i< props.rating; i++) {
        starArr.push(
            <img src={require("../assets/images/Star.jpg")} 
            alt="Star rating"
            width="15px"
        />)
    }
    return(
        <div className="review-card">
            <div className="review-card-stars">
                {starArr}
            </div>
            <div className="review-card-profile">
                <div className="review-card-image">
                    <img src={props.image} 
                         alt="Profile pic"
                         width="30px" />
                </div>
                <div className="review-card-name">
                    <p><b>{props.name}</b></p>
                    <p>{props.userId}</p>
                </div>
            </div>
            <div className="review-card-review">
                <p>{props.review}</p>
            </div>
        </div>
    )
}