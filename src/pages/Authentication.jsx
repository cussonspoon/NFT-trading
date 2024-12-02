import Login from '../components/Login';
import Signup from '../components/Signup';
import { useState } from 'react';

const Authentication = () => {
    // const [panel, setPanel] = useState("login");
    // const toggle = (panel) => {
    //     setPanel(panel);
    // } 
    const [isSignIn, setIsSignIn] = useState(true);
    const toggle = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div className='flex justify-center'>
            <img className="w-screen h-screen fixed top-0 left-0 blur-sm z-0" src="/home/bg.jpg"></img>
            {/* <div className="w-2/4 h-4/6 flex absolute top-32 rounded-2xl  z-10"> */}
            <div className="w-[900px] h-[600px] flex absolute top-36 rounded-2xl  z-10">
                <div className="w-full h-full shadow-lg">
                    <div className="absolute w-full h-full opacity-80 bg-white rounded-md z-20">

                    </div>

                    {
                        isSignIn ? <Signup toggle={toggle}/> : <Login toggle={toggle}/>
                    }
                   
                    

                    <img className="absolute w-1/2 h-full p-3 z-30" src="/home/authen.jpg" alt="" />

                </div>  
            </div>
        </div>
    )   
}

export default Authentication; 