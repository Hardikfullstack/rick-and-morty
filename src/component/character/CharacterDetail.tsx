import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { clearCharacter, getCharacterDetail, getEpisodeDetail } from "../../redux/action";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ButtonGoBack from "./ButtonGoBack";
import AliveButton from "./AliveButton";
import CharacterAccording from "./CharacterAccording";

type CharacterDetail = {
    characterId?: number;
    showDetail: boolean;
    setShowDetail: (show: boolean) => void
}

export default function CharacterDetail({
  characterId,
  showDetail,
  setShowDetail,
}:any) {
  const dispatch = useAppDispatch();
  const characterDetail = useAppSelector((state: any) => state.data.character);
  const episodeDetail = useAppSelector((state: any) => state.data.episode);
//   const [isActive, setIsActive] = useState(false);
  const query = (data:object) => {
    const graphqlQuery = {
      query: `
                query getCharacterDetail($id: ID!) {
                character(id: $id) {
                  name
                  image
                  species
                  gender
                  status
                  episode {
                    name
                    id
                  }
                  location {
                    name
                    dimension
                  }
                }
              }`,
      variables: {
        id: data,
      },
    };
    getCharacterDetail(graphqlQuery);
  };
  const episodeQuery = (data: {name: string}) => {
    const graphqlQuery = {
      operationName: "episodes",
      query: `
                query episodes($filter:  FilterEpisode!) {
                episodes(filter: $filter) {
                      results{
                        name
                        air_date
                        episode
                    }
                }
                }`,
      variables: {
        filter: data,
      },
    };
    getEpisodeDetail(graphqlQuery);
  };
  useEffect(() => {
    query(characterId);
  }, []);



   const handleDetails = () => {

    setShowDetail(false);
    dispatch(clearCharacter());
  }
  // if (loading) return <div className={style.loader}><CircularProgress/></div>;
  return (
    <div>
        {characterDetail && characterDetail.image &&
            <Grid container component="main" sx={{height: "0vh"}}>
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={7}>
                    <img
                        src={characterDetail && characterDetail.image}
                        style={{
                            position: "sticky",
                            top: "80px",
                            width: "70%",
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Paper
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                            }}
                        >
                            <Typography component="h1" variant="h6">
                                <b>Name: </b>
                                {characterDetail?.name}
                            </Typography>
                            <Typography component="h1" variant="h6">
                                <b>Species: </b>
                                {characterDetail?.species}
                            </Typography>
                            <Typography component="h1" variant="h6">
                                <b>Gender: </b>
                                {characterDetail?.gender}
                            </Typography>
                            <AliveButton characterDetail={characterDetail}/>
                        </Paper>
                        <Box sx={{mt: 1}}>
                            <h1>Episode Name</h1>
                            <div style={{height: "300px", overflow: "auto"}}>
                                <CharacterAccording episodeQuery={episodeQuery} episodeDetail={episodeDetail}
                                                    characterDetail={characterDetail}/>

                            </div>

                            <ButtonGoBack handleDetails={handleDetails}/>


                        </Box>
                    </Box>
                </Grid>
            </Grid>
        }
    </div>
  );
}
