export default function Footer() {
    return (
        <footer>
            <div>
                <img src={require("../assets/images/Asset 20@4x.png")} 
                     alt="Little lemon footer logo" 
                     width="100px"
                />
            </div>

            <div>
                <h4>LINKS</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
            </div>

            <div>
                <h4>CONTACT</h4>
                <address>
                    <p><b>Address :</b>  3505 Cecil Street</p>

                    <p><b>City :</b>  Chicago</p>

                    <p><b>State :</b>  Illinois</p>

                    <p><b>Zipcode :</b>  60605</p>

                    <p><b>Telephone :</b>  312-259-2919</p>

                    <p><b>Mobile Number :</b>  773-426-5458</p>
                </address>
            </div>

            <div>
                <h4>CONNECT WITH US</h4>
                    <ul>
                        <li>Email - <a href="mailto:little.lemon@example.com">little.lemon@example.com</a></li>
                        <li>Facebook</li>
                        <li>X</li>
                        <li>Instagram</li>
                        <li>Tiktok</li>
                    </ul>
            </div>
        </footer>

    )
}