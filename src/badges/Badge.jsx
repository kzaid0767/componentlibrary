
import classNames from "classnames"


export default function Badge({children, shape, color}){

    const btnClass = classNames('btn',`btn-${shape}`, `btn-${color}`)

    return <button className={btnClass}>{children}</button>

}