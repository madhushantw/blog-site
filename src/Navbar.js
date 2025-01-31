import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [theme,setTheme] = useState(
        localStorage.getItem("theme")? localStorage.getItem("theme"): "system"
    );
    const element = document.documentElement;
    const darkQury = window.matchMedia("(prefers-color-scheme: dark)");

    const options =[
        {
            icon:'sunny',
            text:'light'
        },
        {
            icon:'moon',
            text:'dark'
        },
        {
            icon:'desktop-outline',
            text:'system'
        }
    ];

    function onWindowMach(){
        if(
            localStorage.theme === 'dark' || 
            (!("theme" in localStorage) && darkQury.matches)
            ){
            element.classList.add('dark');
        }else{
            element.classList.remove('dark');
        }
    }
    onWindowMach();

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme','dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme','light');
                break;
            default:
                localStorage.removeItem('theme');
                break;
        }
        
    }, [theme,element.classList]);

    darkQury.addEventListener('cgange',(e)=>{
        if(!("theme" in localStorage)){
            element.classList.add('dark');
        }else{
            element.classList.remove('dark');
        }
    })

    return ( 
        <nav className="shadow-md navbar dark:text-gray-100">
            <h1 className="text-2xl font-medium">Blogma</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
            <div className="ml-5 duration-100 bg-gray-100 rounded dark: dark:bg-slate-800">

            {
                options?.map(opt=>(
                    <button 
                    key={opt.text} 
                    onClick={()=>setTheme(opt.text)}
                    className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`}
                    >
                    <ion-icon name={opt.icon}></ion-icon>
                    </button>
                ))
            }
                
            </div>

        </nav>
    );
}

export default Navbar;