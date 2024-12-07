import { Link } from "react-router-dom";
import map2Image from '../assets/map2.svg'
import thailand from '../assets/Thailand.svg'
import indonesia from '../assets/Indonesia.svg'
import newZeland from '../assets/NewZeland.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
function Distination() {
  return <div>
    <h2 className='text-center pt-16 text-3xl '>وجهاتنا السياحية المشهورة</h2>
    <div className='grid grid-cols-2 gap-24 pt-10'>
        <div >
            <img className='w-[1000px] h-[550px]' src={map2Image} alt="map" />
        </div>
        <div className='grid gap-5 items-center'>
            <div className='flex items-center w-[70%]  bg-white shadow-lg rounded-lg'>
                <img className='w-[150px]' src={thailand} alt="thailand" />
                <h3 className='mr-6'>تايلند</h3>
                <div className='mx-12 text-center'>
                    <p>20+رياضة</p>
                    <p>يومين & وثلاث ليالي</p>
                </div>
                <Link className="transition-transform transform hover:scale-150" to="/thailand"><FontAwesomeIcon icon={faArrowLeft} /></Link>
                
            </div>
            <div className='flex items-center w-[70%]  bg-white shadow-lg rounded-lg'>
                <img className='w-[150px]' src={indonesia} alt="indonesia" />
                <h3 className='mr-6'>اندونيسيا</h3>
                <div className='mx-10 text-center'>
                    <p>25+رياضة</p>
                    <p> يومين & وثلاث ليالي</p>
                </div>
                <Link className="transition-transform transform hover:scale-150" to="/indonesia"><FontAwesomeIcon icon={faArrowLeft} /></Link>
            </div>
            <div className='flex items-center w-[70%]  bg-white shadow-lg rounded-lg'>
                <img className='w-[150px]' src={newZeland} alt="newZeland" />
                <h3 className='mr-6'>نيوزيلندا</h3>
                <div className='mx-10 text-center'>
                    <p>25+رياضة</p>
                    <p>يومين & وثلاث ليالي</p>
                </div>
                <Link className="transition-transform transform hover:scale-150" to="/newZeland"><FontAwesomeIcon icon={faArrowLeft} /></Link>
            </div>
        </div>
    </div>
  </div>;
}

export default Distination;
