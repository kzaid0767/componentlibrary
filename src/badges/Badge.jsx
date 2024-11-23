
import classNames from "classnames"


export default function Badge({children, shape, color, onClick}){

    const btnClass = classNames('btn',`btn-${shape}`, `btn-${color}`)

    return <button onClick={onClick} className={btnClass}>{children}</button>

}