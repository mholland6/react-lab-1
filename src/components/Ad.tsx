import "./AdDesigner.css";
import AdDesigner from "./AdDesigner"

interface Props {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

function Ad({flavor, fontSize, darkTheme }: Props) {
  let fontStyles = fontSize;

  return (
    <div className={"AdDesigner--Ad"}>
    <p>Vote For</p>
    <p><span className="AdDesigner--Caveat">{flavor}</span></p>
  </div>
  )
};

export default Ad;