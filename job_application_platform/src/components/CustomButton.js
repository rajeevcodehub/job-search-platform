import React from "react";
import Button from '@mui/material/Button';

const CustomButton = ({backgroundColor, color, text}) => {
  
    return (
        <Button style={{ backgroundColor: backgroundColor, color: color, width:"100%" }}>
          {text}
        </Button>
      );
}


export default CustomButton;
