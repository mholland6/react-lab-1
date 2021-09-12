import "./AdDesigner.css";
import { useState } from "react";
import Ad from "./Ad";



function AdDesigner() {

  const [selectedFlavor, setSelectedFlavor] = useState("Strawberry");
  function setChocolate() {
    setSelectedFlavor("Chocolate")
  };
  function setVanilla() {
    setSelectedFlavor("Vanilla")
  };
  function setStrawberry() {
    setSelectedFlavor("Strawberry")
  };
  
  // Light and Dark Themes
  const [colorMode, setColorMode] = useState("dark");
  let addColorModeClass = "";
  if (colorMode === "dark") {
    addColorModeClass = " dark";
  }
  function setLightMode() {
    setColorMode("light");
  }
  function setDarkMode() {
    setColorMode("dark")
  }

 
  // function setColorMode() {
  //   if (colorMode === "dark") {
  //     setColorMode( => "light")
  //   } else {
  //     setColorMode(colorMode => "dark");
  //   }
  // }
  
  // const [selected, setSelected] = useState("unselected")
  // function disableButton() {
  //   setSelected(setStatus => "selected" )
  // }

  // Font Size 
  const [size, setSize] = useState(20);
  const fontStyles = {
    fontSize: size + "px"
  }; 
  function increaseFontSize() {
    setSize(prevSize => prevSize + 1)
  }
  function decreaseFontSize() {
    setSize(prevSize => prevSize - 1)
  }


  return (
    <div className="AdDesigner">
      <h1 className="AdDesigner--Caveat">Ad Designer</h1>
      <div>

      </div>
      {/* <div className={"AdDesigner--Ad"+ addColorModeClass}>
        <p>Vote For</p>
        <p><span className="AdDesigner--Caveat" style={fontStyles} >{selectedFlavor}</span></p>
      </div> */}
      <div>
        <p>What to Support</p>
        <p>
          <button disabled={selectedFlavor==="Chocolate"} onClick={setChocolate}>Chocolate</button>
          <button disabled={selectedFlavor==="Vanilla"} onClick={setVanilla}>Vanilla</button>
          <button disabled={selectedFlavor==="Strawberry"} onClick={setStrawberry}>Strawberry</button>
        </p>
      </div>
      <div>
        <p>Color Theme</p>
        <p>
          <button disabled={colorMode==="light"} onClick={setLightMode}>Light</button>
          <button disabled={colorMode==="dark"} onClick={setDarkMode}>Dark</button>
        </p>
      </div>
      <div>
        <p>Font Size</p>
        <p className="FontSizeChangeRow">
          <button onClick={decreaseFontSize}>Down</button>
          <span className="AdDesigner--fontSize">{size}</span> 
          <button onClick={increaseFontSize}>Up</button>
        </p>
      </div>



    </div>
  )
}

export default AdDesigner;