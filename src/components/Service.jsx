import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket ,faHouse,faPaperPlane} from '@fortawesome/free-solid-svg-icons';
function Service() {
    return ( 
        <div className='bg-[#E5E5E5] h-[50vh]'>
            <h2 className='text-center py-16 text-3xl '>خدماتنا</h2>
            <div className='flex justify-around text-center'>
                <div className='bg-[#F9F9F9] w-[300px] h-[232]'>
                    <FontAwesomeIcon className='text-[#32DF8F] mx-5' icon={faTicket} />
                    <h3 className='mx-5 my-2 font-bold'>حجز التذاكر</h3>
                    <p className='mx-5'>نقوم بحجز كافة أنواع التذاكر الوطنية أو الدولية لوجهتك.</p>
                </div>
                <div className='bg-[#FFFFFF] w-[300px] h-[232]'>
                    <FontAwesomeIcon className='text-[#00B8E0] mx-5' icon={faHouse} />
                    <h3 className='mx-5 my-2 font-bold'>حجز الفنادق</h3>
                    <p className='mx-5'>يمكنك بسهولة حجز فندقك وفقًا لميزانيتك من خلال موقعنا الإلكتروني.</p>
                </div>
                <div className='bg-[#F9F9F9] w-[300px] h-[232]'>
                    <FontAwesomeIcon className='text-[#E48B78] mx-5' icon={faPaperPlane} />
                    <h3 className='mx-5 my-2 font-bold'>خطة السياحة</h3>
                    <p className='mx-5 mb-3'>نحن نقدم لك أفضل خطة في وقت قصير. اكتشف المزيد.</p>
                </div>
            </div>
        </div>
    );
}

export default Service;