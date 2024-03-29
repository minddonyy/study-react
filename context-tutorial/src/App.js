import React from "react";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColor";
import { ColorProvider } from "./contexts/color";
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
