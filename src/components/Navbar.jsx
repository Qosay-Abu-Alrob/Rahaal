import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    return ( 
        <nav className="flex justify-around text-white p-10 font-bold text-xl">
            <div className="text-[#005F15]">رحال<FontAwesomeIcon className="mx-2" icon={faPlane} /></div>
            <div className="flex ">
                <ul><li className="hover:text-[#005F15]"><Link to="/">الرئيسية</Link></li></ul>
                <ul><li className="hover:text-[#005F15] mx-10"><Link to="/about">من نحن</Link></li></ul>
                <ul><li className="hover:text-[#005F15]"><Link to="/services">خدماتنا</Link></li></ul>
            </div>
            <div className="hover:text-[#005F15]">
                <Link to="/contact">تواصل معنا</Link>
            </div>
            
        </nav>
    );
}

export default Navbar;