import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";

import Typography from "@mui/joy/Typography";
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
  const [openModal, setOpenModal] = useState(false);
  const [detailText, setDetailText] = useState("");
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

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100%"
      style={{
        minHeight: "100vh",
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
                details={animal.details}
                setDetailText={setDetailText}
                setOpenModal={setOpenModal}
              />
            </Grid>
          );
        })}
      </Grid>
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
      <Modal open={openModal}>
        <ModalDialog sx={{ width: "400px" }}>
          <ModalClose
            onClick={() => {
              setOpenModal(false);
            }}
          />
          <Typography>{detailText}</Typography>
          <Typography>{detailText}</Typography>
          <Typography>{detailText}</Typography>
        </ModalDialog>
      </Modal>
    </Grid>
  );
};
export default AnimalCards;
