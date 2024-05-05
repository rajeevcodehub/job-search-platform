import React from "react";
import Button from '@mui/material/Button';

const CustomButton = ({backgroundColor, color, text, href}) => {
  
    return (
        <Button style={{ backgroundColor: backgroundColor, color: color, width:"100%" }} onClick={() => {window.open(href, "_blank");}}>
          {text}
        </Button>
      );
}


export default CustomButton;
