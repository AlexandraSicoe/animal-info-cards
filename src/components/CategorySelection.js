import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import backgroundImage from "../images/bg1.jpg";
import animalData from "../data/data.json";
import { Link } from "react-router-dom";

const CategorySelection = () => {
  console.log(animalData);
  return (
    <div
      className="container-fluid "
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
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        height="100%"
      >
        <Typography
          level="h1"
          maxWidth={800}
          textAlign="center"
          style={{ color: "#dcae96", fontFamily: "Montserrat" }}
        >
          Discover the Marvels of the Animal Kingdom
        </Typography>
        <Typography
          level="body2"
          maxWidth={900}
          lineHeight="md"
          style={{
            color: "#ffefd5",
            marginTop: "25px",
            fontFamily: "Montserrat",
            textIndent: "10%",
          }}
        >
          Welcome to our captivating webpage dedicated to the awe-inspiring
          world of animals. Here, you'll embark on an extraordinary journey
          through the vast diversity of species that inhabit our planet. Let us
          delve into the secrets of the wild and discover the extraordinary
          lives that animals lead, reminding us of the extraordinary beauty and
          importance of preserving the biodiversity that surrounds us.
        </Typography>
        <div>
          {animalData.map((animal, index) => {
            return (
              <Link
                key={animal.name + index}
                to={"/animal-cards?cat=" + animal.slug}
              >
                <Button
                  style={{
                    fontSize: "20px",
                    color: "white",
                    margin: "15px",
                  }}
                >
                  {animal.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </Grid>
    </div>
  );
};
export default CategorySelection;
