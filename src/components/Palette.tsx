import * as React from 'react';

export interface PaletteProps {
  color: string;
  onColorChange(): void;
}
 
const Palette: React.SFC<PaletteProps> = ({color, onColorChange}) => {
  return ( 
     <button className="palette" style={{ backgroundColor: color }} onClick={onColorChange}>  {color} </button>
   );
}
 
export default Palette;