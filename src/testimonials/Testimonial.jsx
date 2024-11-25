import { VscQuote } from "react-icons/vsc";
import icon from '../assets/Icon.png'
import Mark from '../assets/Mark.png'
export default function Testimonial({children, src, author, title}){

    return src?
        <div className="testimonial">
            <img className="image" src={src} alt="picture of person smiling" />
            <div className="details">
                <img src={icon} className="quotes" />
                <p className="quote-text">{children}</p>
                    <cite>{author}</cite>
                    <cite className="job-description">{title}</cite>
            </div>
        </div> :
        <div className="testymonial">
            <div className="detyils">
                <div className="work"><img src={Mark} className="mark-image" /> <span>Work</span><span className="cation">cation</span></div>
                <p className="nosrc-text">"{children}"</p>
                    <cite className="authortitle1 nosrc-text">{author}</cite>
                    <cite className="authortitle2 nosrc-text">{title}</cite>
            </div>
        </div>
}

/* 


*/