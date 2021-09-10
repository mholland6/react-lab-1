import { useState } from "react";
import "./Header.css";


interface Props {
  name: string;
}
// Each component is defined by a function.
// It must be capitalized.
function Header({name}: Props) {
  return (
   <header className="Header">
   <p>Ice Cream Wars</p>  
   <p>Welcome: {name}</p>  
   </header>
  )
}

export default Header;