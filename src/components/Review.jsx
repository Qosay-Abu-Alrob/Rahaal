import counter from './Counter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft ,faChartColumn,faMapLocationDot,faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import mapImage from '../assets/map1.svg'
function Review() {
    const background = {
        backgroundImage: `url(${mapImage})`,
    };
    return (  
        <div className="bg-[#F2F7F6] h-[60vh] bg-cover" style={background}>
            <h2 className='text-center pt-16 text-3xl '>نحن نحاول دائمًا أن نقدم لك أفضل خدمة</h2>
            <p className='text-center py-1 textxl '>نحن نسعى دائمًا لإسعاد عملائنا. نحن نقدم كافة أنواع المرافق. رضاكم هو أولويتنا الرئيسية.</p>
            <div className='flex justify-around text-center pt-16'>
                <div className='bg-[#F9F9F9] w-[300px] h-[232]'>
                <FontAwesomeIcon className='text-[#32DF8F] mx-5' icon={faCalendarDays} />
                    <h3 className='mx-5 my-2 font-bold flex items-center justify-center'>{counter(15,10)}+</h3>
                    <p className='mx-5'>عدد سنين الخبرة</p>
                </div>
                <div className='bg-[#FFFFFF] w-[300px] h-[232]'>
                    <FontAwesomeIcon className='text-[#00B8E0] mx-5' icon={faChartColumn} /> 
                    <h3 className='mx-5 my-2 font-bold flex items-center justify-center'>{counter(15000,0.0001)}+</h3>
                    <p className='mx-5'>مسافرونا السعداء</p>
                </div>
                <div className='bg-[#F9F9F9] w-[300px] h-[232]'>
                    <FontAwesomeIcon className='text-[#E48B78] mx-5' icon={faMapLocationDot} />
                    <h3 className='mx-5 my-2 font-bold flex items-center justify-center'>{counter(650,10)}+</h3>
                    <p className='mx-5 mb-3'>عدد الاماكن التي زرناها</p>
                </div>
                <div className='bg-[#F9F9F9] w-[300px] h-[232]'>
                    <FontAwesomeIcon className='text-[#E48B78] mx-5' icon={faClockRotateLeft} />
                    <h3 className='mx-5 my-2 font-bold flex items-center justify-center'>{counter(2000,10)}+</h3>
                    <p className='mx-5 mb-3'>سجل الرحلات</p>
                </div>
            </div>
        </div>
    );
}

export default Review;