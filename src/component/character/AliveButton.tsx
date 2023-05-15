import React from 'react'
import Button from "@mui/material/Button";

const AliveButton = ({characterDetail}:any) => {
  return (
    <>
         <Button
                fullWidth
                style={{
                  backgroundColor:
                    characterDetail?.status === "Alive"
                      ? "#50C878"
                      : characterDetail?.status === "Dead"
                      ? "#FF0000"
                      : "rgba(44,141,217,0.86)",
                  color: "#fff",
                }}
                sx={{ mt: 3, mb: 2 }}
              >
                {characterDetail?.status}
              </Button>
    </>
  )
}

export default AliveButton