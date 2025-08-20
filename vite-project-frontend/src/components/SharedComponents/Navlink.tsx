import { Link } from "react-router-dom"

type Props = {
    to: string;
    bg: string;
    text: string;
    textColor:string;
    onClick?:()=>Promise<void>;
}

const Navlink = (props: Props) => {
  return (
    <Link 
    className="navlink"
    to={props.to}
    onClick={props.onClick}
    style={{background:props.bg, color:props.textColor, }}>
        {props.text}
    </Link>
  )
}

export default Navlink