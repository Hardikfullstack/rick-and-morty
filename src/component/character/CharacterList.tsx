import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import style from "./index.module.css";
import CharacterDetail from "./CharacterDetail";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import InfoIcon from "@mui/icons-material/Info";
import {getCharacter, getCharacterDetail, setCharacter} from "../../redux/action";
import { useAppDispatch } from "../../redux/hooks";
import { useAppSelector } from "../../redux/hooks";
import SearchInput from "./SearchInput";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  position: "relative",
  border: "5px solid #ffffff",
  boxShadow: "0 14px 20px rgb(0 0 0 / 20%)",
  borderRadius: "0 0 250px 250px",
  overflow: "hidden",
  marginBottom: 0,
});
export default function CharacterList() {
  const [characterId, setCharacterId] = useState<number>();
  const [showDetail, setShowDetail] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.data.allCharacters);


  const pageQuery = async (data: number) => {
    const graphqlQuery = {
      operationName: "characters",
      query: `
                query characters($page : Int!){
                characters(page: $page) {
                    info {
                        count
                    }
                    results {
                        name
                        image
                        species
                        id
                        status
                    }
                }
            }`,
      variables: { page: data },
    };
    await getCharacter(graphqlQuery, (data) => dispatch(setCharacter(data)));
  };

  useEffect(() => {
    pageQuery(page);
  }, []);

   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    pageQuery(value);
  };

  const handleCharacterDetail = (id: number) => {
    setShowDetail(!showDetail);
    setCharacterId(id);
    // setShowDetail(false);
  };


  const handleQuery = async (type: 'name' | 'gender' | 'status', value: any) => {
    // Query({ status: e.target.value as string });
    const query: {name?: string, gender?: string, status?: string} = {};
    query[type] = value;
    const graphqlQuery = {
      operationName: "characters",
      query: `
                    query characters($filter: FilterCharacter!){
                    characters(filter:$filter){
                        results {
                            name
                            image
                            species
                            id
                            status
                        }            
                    }
                 }`,
      variables: { filter: query },
    };
    await getCharacter(graphqlQuery, (data) => dispatch(setCharacter(data)));
  };

  return (
    <div className={style.container}>
      {!showDetail ? (
        <div>
          <div className={style.filterRow}>
            <div className={style.filterRowInside}>
              <div className={style.filter} id="input-labal" >
                <InputLabel htmlFor="input-labal"  className={style.selectLabel} aria-label='true'>Status</InputLabel>
                <Select
                  onChange={(e) => {
                    handleQuery("status", e.target.value);
                  }}
                  className={style.filterBox}
                  name="status-select"
                  data-testid="status-select"
                >
                  <MenuItem value={""} data-testid="status-option"></MenuItem>
                  <MenuItem value={"Alive"} data-testid="status-option">Alive</MenuItem>
                  <MenuItem value={"Dead"} data-testid="status-option">Dead</MenuItem>
                  <MenuItem value={"Unknown"} data-testid="status-option">Unknown</MenuItem>
                </Select>
              </div>
              <div className={style.filter} data-testid="gender-select" id="gender">
                <InputLabel className={style.selectLabel} >Gender</InputLabel>
                <Select
                  onChange={(e) => {
                    handleQuery("gender", e.target.value);
                  }}
                  className={style.filterBox}
                  name="gender-select"
                  id="gender-select"
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </div>
            </div>
            <SearchInput name={"filter-input"} handleNameQuery={handleQuery}/>
          </div>
          <Grid
            item
            container
            direction="row"
            className={style.card}
            id="character-detail-modal"
          >
            {character &&
              character?.map(
                (char: any, index: React.Key | null | undefined) => {
                  return (
                    <Grid item key={index} data-testid={"character-list"} className={style.characterPage}>
                      <Grid item className={style.image}>
                        <div>
                          <ButtonBase sx={{ width: 220, height: 300 }}>
                            <Img
                              alt="complex"
                              src={char.image}
                              sx={{ width: 230, height: 400 }}
                              className={style.imgStyle}
                            />
                            <span
                              className={style.status}
                              style={{
                                backgroundColor:
                                  char.status === "Alive"
                                    ? "#50C878"
                                    : char.status === "Dead"
                                    ? "#FF0000"
                                    : "rgba(44,141,217,0.86)",
                              }}
                            >
                              {char.status}
                            </span>

                            <span
                              className={style.imgIcon}
                              id="character-details"
                              data-testid="character-details"
                              onClick={() => handleCharacterDetail(char.id)}
                            >
                              <InfoIcon
                                sx={{
                                  fontSize: 40,
                                  margin: "-2px",
                                  color: "midnightblue",
                                }}
                              />
                            </span>
                          </ButtonBase>
                        </div>
                      </Grid>
                      <div
                        className={style.characterNameDiv}
                        id="character-detail-modal"
                      >
                        <Typography
                          gutterBottom
                          component="div"
                          className={style.characterName}
                          id="name-input"
                        >
                          {char.name}
                        </Typography>
                        <Typography
                          gutterBottom
                          component="div"
                          className={style.characterSpecies}
                        >
                          {char.species}
                        </Typography>
                      </div>
                    </Grid>
                  );
                }
              )}
          </Grid>
          <Stack
            sx={{ marginY: "18px", display: "flex", alignItems: "center" }}
          >
            <Pagination
              count={10}
              color="primary"
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </div>
      ) : (
        <CharacterDetail
          characterId={characterId}
          setShowDetail={setShowDetail}
          showDetail={showDetail}
        />
      )}
    </div>
  );
}

