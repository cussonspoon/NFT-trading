import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogoClick = (hash) => {
        navigate(`/${hash}`, {
            replace : true
        });
        
    }
    return (
        <nav className="flex justify-between bg-zinc-900 backdrop-blur-sm bg-opacity-50 fixed top-0 left-0 w-full p-5 z-20 text-white">
            <h1 
                className="text-2xl font-bold"
                onClick={() => handleLogoClick("#home")}>TRADEX</h1>
            <ul className="flex space-x-6">
                <li><p
                onClick={() => handleLogoClick("#artworks")}
                >ARTWORKS</p></li>
                <li><p>YOUR COLLECTIONS</p></li>
                <li><p>PROFILE</p></li>
                <li><p>WALLET</p></li>
            </ul>
        </nav>
    )
}

export default Navbar;