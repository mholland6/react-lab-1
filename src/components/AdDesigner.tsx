import "./AdDesigner.css";
import { useState } from "react";



function AdDesigner() {

  const [selectedFlavor, setSelectedFlavor] = useState("chocolate");
  function setChocolate() {
    setSelectedFlavor("chocolate")
  };
  function setVanilla() {
    setSelectedFlavor("vanilla")
  };
  function setStrawberry() {
    setSelectedFlavor("strawberry")
  };
  
  // Light and Dark Themes
  const [colorMode, setColorMode] = useState("light");
  let addColorModeClass = "";
  if (colorMode === "dark") {
    addColorModeClass = "dark";
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
  
  const [selected, setSelected] = useState("unselected")
  function disableButton() {
    setSelected(setStatus => "selected" )
  }

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
      <h1>Ad Designer</h1>
      <div>

      </div>
      <div className={"AdDesigner--Ad" + " " + addColorModeClass}>
        <p>Vote For</p>
        <p><span style={fontStyles} >{selectedFlavor}</span></p>
      </div>
      <div>
        <p>What to Support</p>
        <p>
          <button disabled={selectedFlavor==="chocolate"} onClick={setChocolate}>Chocolate</button>
          <button disabled={selectedFlavor==="vanilla"} onClick={setVanilla}>Vanilla</button>
          <button disabled={selectedFlavor==="strawberry"} onClick={setStrawberry}>Strawberry</button>
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
        <p>
          <button onClick={decreaseFontSize}>Down</button>
          <span className="AdDesigner--fontSize">{size}</span> 
          <button onClick={increaseFontSize}>Up</button>
        </p>
      </div>



    </div>
  )
}

export default AdDesigner;