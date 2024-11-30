import Salecard from "../components/Salecard";
import Layout from "../components/Layout";

const Tag = ({name}) => {
    return (
        <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-1 mt-2  text-center me-2 mb-2">{name}</button>

    ); 
}

const ArtistProfile = () => {
    return (
        <Layout>
            <div className="relative w-full min-h-screen bg-zinc-900 overflow-auto">
                {/* Banner Image */}
                <div className="w-screen h-96">
                    <img
                        className="object-cover w-full h-full"
                        src="/artist/banner.webp"
                        alt=""
                    />
                    <div className="absolute top-0 h-96 w-full bg-gradient-to-t from-black via-zinc/60 to-zinc/50
        bg-opacity-50"></div>

                    <div className="ml-96 mt-20">
                        <div className="grid grid-cols-4 gap-4">
                            <Salecard></Salecard>
                            <Salecard></Salecard>
                            <Salecard></Salecard>
                            <Salecard></Salecard>
                            <Salecard></Salecard>
                            <Salecard></Salecard>
                        </div>
                        {/* <Salecard></Salecard> */}
                    </div> 
                    
                </div>

        
                {/* Seller Profile */}
                <div className="absolute top-64 left-20 backdrop-blur-sm bg-white/20 text-white w-64 rounded-3xl p-5 shadow-lg">
                <div className="flex flex-col items-center">
                    <img className="w-40 h-40 rounded-full mb-10" src="/nft/nft1.jpg" alt="" />
                    <h1 className="text-xl font-bold">Neo Tokyo Citizens</h1>
                    <h2 className="text-sm  mb-5">Metamask account</h2>
        
                    <p className="text-center text-sm mt-2 mb-5">
                    A trailblazing NFT artist known for blending futuristic design with
                    cutting-edge blockchain technology.
                    </p>
        
                    <div className="grid grid-cols-2 mt-3">
                    <Tag name={"futuristic"}></Tag>
                    <Tag name={"dark"}></Tag>
                    <Tag name={"realistic"}></Tag>
                    </div>
                </div>
                </div>
        
                {/* Sale Cards */}
                
            </div>
        </Layout>
    
    );
  };
  

export default ArtistProfile;