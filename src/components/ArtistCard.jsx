import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const ArtistCard = ({ artist }) => {
    return (
        <div className="flex justify-center items-center p-2 bg-slate-700 rounded-lg">
            <img src="/artist/logo.jpg" className="w-20 h-20 rounded-lg mr-2" />
            <div className="flex flex-col items-start">
                <h2>Bored Ape Yatch Club <span>
                    <FontAwesomeIcon icon={faCircleCheck} className="text-blue-500" />   
                </span></h2>
                <h2>Volume: 20 ETH</h2>
            </div>
            
        </div>
    );
}

export default ArtistCard;