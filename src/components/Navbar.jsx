import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleNavigate = (hash) => {
        navigate("/", { replace: true }); // Navigate to home
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }); // Scroll to section
        }, 0);
    };

    const handlePage = (page) => {
        navigate(`/${page}`, { replace: true });
    }; 
    return (
        <nav className="flex justify-between bg-zinc-900 backdrop-blur-sm bg-opacity-50 fixed top-0 left-0 w-full p-5 z-20 text-white">
            <h1
            className="text-2xl font-bold cursor-pointer"
            onClick={() => handleNavigate("home")}
            >
            TRADEX
            </h1>
            <ul className="flex space-x-6 items-center">
            <li>
                <p
                className="cursor-pointer"
                onClick={() => handleNavigate("artworks")}
                >
                ARTWORKS
                </p>
            </li>
            <li>
                <p 
                className="cursor-pointer"
                onClick={() => handlePage("profile")}
                >YOUR COLLECTIONS</p>
            </li>
           
            <li>
                <p className="cursor-pointer">WALLET</p>
            </li>
                        <li>
          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:from-pink-500 hover:to-purple-500 transition duration-300"
            onClick={() => handlePage("upload")}
          >
            UPLOAD
          </button>
        </li>
            </ul>
        </nav>
        );
}

export default Navbar;