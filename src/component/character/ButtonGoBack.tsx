import React from "react";
import Button from "@mui/material/Button";

const ButtonGoBack = ({handleDetails}:any) => {
  return (
    <>
      <Button
        onClick={() => handleDetails()}
        fullWidth
        variant="contained"
        data-testid="go_back"
        sx={{ mt: 3, mb: 2 }}
      >
        Go Back
      </Button>
    </>
  );
};

export default ButtonGoBack;