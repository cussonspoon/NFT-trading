import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import NFTcard from './NFTcard'

const Home = () => {
    const navigate = useNavigate();
    const handleNavigate = (hash) => {
        navigate("/", { replace: true }); // Navigate to home
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }); // Scroll to section
        }, 0);
    };
    return (
        <div className="w-full h-screen flex px-20 py-10 text-white">
            <div className="flex flex-col w-1/2 justify-center pl-20 pb-40 items-start">
                <h1 className="text-5xl">
                    Extraordinary
                </h1>
                <h1 className="text-5xl">
                    rare digital NFT
                </h1>
                <h1 className="text-5xl">
                    by Matt Gardner
                </h1>
                <button 
                    onClick={() => handleNavigate("artworks")}
                    className="my-5 p-3 rounded-full border border-lime-300 hover:border-white transition hover:bg-zinc-900 text-black hover:text-white bg-lime-300">
                    VIEW MORE
                    <FontAwesomeIcon className='ml-2' icon={faArrowUpRightFromSquare} />
                </button>
                <div className="flex space-x-9">
                    <div>
                        <h1>200+</h1>
                        <h1>Artworks</h1>
                    </div>
                    <div>
                        <h1>40+</h1>
                        <h1>Clients Worldwide</h1>
                    </div>
                    <div>
                        <h1>12</h1>
                        <h1>Awards</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-center h-full">
                <NFTcard width={'3/4'} height={'4/5'}></NFTcard>
            </div>
        </div>
    );
}

export default Home;