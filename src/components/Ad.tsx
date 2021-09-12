import "./AdDesigner.css";
import Ad from "../models/AdModel";
import AdDesigner from './components/AdDesigner';

interface Props {
  ad: Ad;
}

function AdDisplay({ad}: Props) {
  

  return (
    <div className={"AdDesigner--Ad"+ addColorModeClass}>
    <p>Vote For</p>
    <p><span className="AdDesigner--Caveat" style={fontStyles} >{ad.flavor}</span></p>
  </div> 
  )
};

export default AdDisplay;