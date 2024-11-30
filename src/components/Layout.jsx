import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="w-screen min-h-screen bg-zinc-900">
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default Layout;