export default function Navbar() {
    
    return (
        <nav>
           <img src={require("../assets/images/Logo .png")} alt="Little Lemon Logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}
