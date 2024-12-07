import Navbar from "./Navbar";
import Packages from "./Packages";
import Review from "./Review";
import Service from "./Service";
import Distination from "./Distinations";
import HomeImage from '../assets/Home.svg'
import Footer from './Footer'
function Home() {
    const background = {
        backgroundImage: `url(${HomeImage})`,
    };
    return ( 
        
        <div className=" bg-cover   sm:bg-cover md:bg-cover lg:bg-cover bg-no-repeat h-[100vh] w-full " style={background}>
            <Navbar/>
            <div className="flex items-center flex-col justify-center h-[80vh] text-white text-xl">
                <h1 className="text-8xl">خيالك هو حدك الوحيد</h1>
                <p className="my-10">نحن نسعى دائمًا لإسعاد عملائنا. نحن نقدم كافة أنواع المرافق. رضاكم هو أولويتنا الرئيسية</p>
                <button className="mt-4 py-2 px-4 bg-[#00A651] text-white rounded transition-transform transform hover:scale-110">استكشف المزيد</button>
            </div>
            <Service />
            <Review /> 
            <Distination />
            <Packages />
            <Footer/>
        </div>

    );
}

export default Home;