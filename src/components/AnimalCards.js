import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import backgroundImage from "../images/bg1.jpg";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";

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
      <Grid container justifyContent="center" alignItems="center" height="100%">
        <Grid m={2}>
          <Card component="li" sx={{ minWidth: 300, minHeight: 400 }}>
            <CardCover>
              <img
                src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                alt=""
              />
            </CardCover>
            <CardContent>
              <Typography
                level="body1"
                fontWeight="lg"
                textColor="#fff"
                sx={{ m: "auto" }}
              >
                More details...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid m={2}>
          <Card component="li" sx={{ minWidth: 300, minHeight: 400 }}>
            <CardCover>
              <img
                src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                alt=""
              />
            </CardCover>
            <CardContent>
              <Typography
                level="body1"
                fontWeight="lg"
                textColor="#fff"
                sx={{ m: "auto" }}
              >
                More details...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid m={2}>
          <Card component="li" sx={{ minWidth: 300, minHeight: 400 }}>
            <CardCover>
              <img
                src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                alt=""
              />
            </CardCover>
            <CardContent>
              <Typography
                level="body1"
                fontWeight="lg"
                textColor="#fff"
                sx={{ m: "auto" }}
              >
                More details...
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default AnimalCards;
