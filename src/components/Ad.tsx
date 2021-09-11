import "./AdDesigner.css";
import Ad from "../models/AdModel";

interface Props {
  ad: Ad;
}

function AdDisplay({ad}: Props) {
  return (
    <div className="AdDesigner--Ad">
    <p>Vote For</p>
    <p><span className="AdDisplay--AdFlavor" >{ad.flavor}</span></p>
  </div>    
  )
};

export default AdDisplay;