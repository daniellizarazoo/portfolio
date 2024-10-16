import { Home, User, Presentation, FileText ,Menu} from "lucide-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const nav = useNavigate();

    return (
        <header className="relative z-10 my-3">
            <nav className="flex justify-between items-center mx-4 lg:mx-24">
                <div className="font-bold text-teal-400 cursor-pointer text-3xl"
                onClick={()=>nav('/')}>
                    TECNODM DL
                </div>
                <div className="flex items-center lg:hidden">
                    <button onClick={toggleMenu} className="text-teal-400 focus:outline-none">
                        <Menu size={18}/>
                        {isMenuOpen ? (
                            <span className="material-icons">close</span>
                        ) : (
                            <span className="material-icons">menu</span>
                        )}
                    </button>
                </div>
                <div className={`flex flex-col lg:flex-row space-x-0 lg:space-x-4 transition-all duration-300 lg:space-y-0 ${isMenuOpen ? 'block' : 'hidden lg:flex'}`}>
                    {[
                        { icon: Home, label: 'Home',route:'/'},
                        { icon: User, label: 'About Me',route:'/about' },
                        { icon: Presentation, label: 'Projects',route:'/projects'},
                        { icon: FileText, label: 'Resume',route:'/resume'}
                    ].map(({ icon: Icon, label, route}) => (
                        <Link key={label} to={route} className="flex items-center space-x-1 hover:text-teal-400 transition-colors">
                            <Icon size={18} />
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
