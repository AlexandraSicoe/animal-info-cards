import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
const CategorySelection = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      height="100%"
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="flex justify-content-center">
        <Typography level="h1" style={{ color: "#00ef81" }}>
          Discover the Marvels of the Animal Kingdom: Fascinating Facts and
          Incredible Diversity
        </Typography>
        <Typography
          level="h3"
          style={{
            color: "white",
            marginTop: "20px",
            maxWidth: "500px",
          }}
        >
          Welcome to our captivating webpage dedicated to the awe-inspiring
          world of animals. Here, you'll embark on an extraordinary journey
          through the vast diversity of species that inhabit our planet. Let us
          delve into the secrets of the wild and discover the extraordinary
          lives that animals lead, reminding us of the extraordinary beauty and
          importance of preserving the biodiversity that surrounds us.
        </Typography>
      </div>
      <div>
        <Button
          style={{
            fontSize: "20px",
            color: "white",
          }}
          variant="soft"
        >
          Birds
        </Button>
        <Button
          style={{
            fontSize: "20px",
            color: "white",
          }}
          variant="solid"
        >
          Mammals
        </Button>
        <Button
          style={{
            fontSize: "20px",
            color: "white",
          }}
          variant="soft"
        >
          Reptiles
        </Button>
      </div>
    </Grid>
  );
};
export default CategorySelection;
