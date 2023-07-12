import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import birds from "../data/birds.json";
import mammals from "../data/mammals.json";
import reptiles from "../data/reptiles.json";
import useQuery from "../helpers/useQuery";
import backgroundImage from "../images/bg1.jpg";
import CardComponent from "./Card";

const AnimalCards = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [animalData, setAnimalData] = useState();
  useEffect(() => {
    if (query.get("cat") === "birds") {
      console.log(birds);
      setAnimalData(birds);
    } else if (query.get("cat") === "reptiles") {
      setAnimalData(reptiles);
    } else if (query.get("cat") === "mammals") {
      setAnimalData(mammals);
    } else {
      navigate("/404");
    }
  }, []);
  useEffect(() => {
    console.log(animalData);
  }, [animalData]);
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "black",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center" height="100%">
        {animalData?.animals.map((animal, index) => {
          return (
            <Grid m={2}>
              <CardComponent
                name={animal.name}
                image={animal.image}
                funFact={animal.funFact}
                index={index}
              />
            </Grid>
          );
        })}
        <Link to={"/"}>
          <Button
            style={{
              fontSize: "20px",
              color: "white",
            }}
          >
            Return to the Category Selection Page
          </Button>
        </Link>
      </Grid>
    </div>
  );
};
export default AnimalCards;
