import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import backgroundImage from "../images/bg1.jpg";

const AnimalCards = () => {
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
          level="h3"
          maxWidth={900}
          lineHeight="md"
          style={{
            color: "#ffefd5",
            marginTop: "25px",
            fontFamily: "Montserrat",
            textIndent: "10%",
          }}
        ></Typography>
      </Grid>
    </div>
  );
};
export default AnimalCards;
