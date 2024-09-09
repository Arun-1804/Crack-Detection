import {Link} from 'react-router-dom';
import logo from "../assests/garudan_white.png"

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#",
    flag
}){
    return(
        <>
        <div className="mb-10">
            {!flag ?  <div className="flex justify-center">
                <img 
                    alt=""
                    style={{height:"160px"}}
                    src={logo} />
            </div> :  ""}
            
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className={`${flag ? "text-white" : " text-gray-900 " } mt-2 text-center text-sm mt-5` } >
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-amber-900 hover:text-amber-950">
                {linkName}
            </Link>
            </p>
        </div>
        </>
    )
}