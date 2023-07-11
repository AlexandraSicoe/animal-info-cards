import Grid from "@mui/joy/Grid";
import backgroundImage from "../images/bg1.jpg";
import birds from "../data/birds.json";
import mammals from "../data/mammals.json";
import reptiles from "../data/reptiles.json";
import useQuery from "../helpers/useQuery";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CardComponent from "./Card";

const AnimalCards = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [animalData, setAnimalData] = useState(null);
  useEffect(() => {
    if (query.get("cat") === "birds") {
      setAnimalData(birds);
    } else if (query.get("cat") === "reptiles") {
      setAnimalData(reptiles);
    } else if (query.get("cat") === "mammals") {
      setAnimalData(mammals);
    } else {
      navigate("/404");
    }
  }, []);
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center" height="100%">
        <Grid m={2}>
          <CardComponent />
        </Grid>
      </Grid>
    </div>
  );
};
export default AnimalCards;
