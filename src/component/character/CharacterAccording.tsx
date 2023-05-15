import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Box, CardContent, Typography } from "@mui/material";

const CharacterAccording = ({ episodeDetail, episodeQuery, characterDetail }: any) => {
    
  const handleEpisodeData = (name: string) => {
    episodeQuery({ name: name });
  };

  return (
    <div>
      {characterDetail?.episode?.map((epis: any, index: number) => {
        return (
          <Box key={index}>
            {/* <Typography key={index} style={{textAlign: 'start'}}
                                                     onClick={() => handleEpisodeData(epis.name)}>{epis.name}</Typography> */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                key={index}
                id="panel1a-header"
                onClick={() => handleEpisodeData(epis.name)}
              >
                <Typography sx={{ fontWeight: "bold" }}>{epis.name}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ textAlign: "start" }}>
                {episodeDetail &&
                  episodeDetail?.map((info: any, id: any) => {
                    return epis.name === info.name ? (
                      <CardContent key={id} style={{ textAlign: "start" }}>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <Typography>
                            <b>air_date :</b>
                          </Typography>
                          <Typography>{info.air_date}</Typography>
                        </div>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <Typography sx={{ mb: 0.5 }}>
                            <b>episode : </b>
                          </Typography>
                          <Typography variant="body2">
                            {info.episode}
                          </Typography>
                        </div>
                      </CardContent>
                    ) : null;
                  })}
              </AccordionDetails>
            </Accordion>
          </Box>
        );
      })}
    </div>
  );
};

export default CharacterAccording;

