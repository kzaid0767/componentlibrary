import classNames from "classnames";
import { CiWarning } from "react-icons/ci";

export default function Banner({children, variant, title, text}){

    const divClass = classNames('banner', `banner-${variant}`)

    return(
        <div className={divClass}>
            {children}
            <div className="banner-text">
                <h3>{title}</h3>
                {text &&<p>{text}</p>}
            </div>
        </div>
    )
}