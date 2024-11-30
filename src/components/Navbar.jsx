const Navbar = () => {
    return (
        <nav className="flex justify-between bg-zinc-900 backdrop-blur-sm bg-opacity-50 fixed top-0 left-0 w-full p-5 z-20 text-white">
            <h1 className="text-2xl font-bold">TRADEX</h1>
            <ul className="flex space-x-6">
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">ARTWORKS</a></li>
                <li><a href="/">YOUR COLLECTIONS</a></li>
                <li><a href="/">PROFILE</a></li>
                <li><a href="/">WALLET</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;