import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
const CardComponent = ({ name, image, funFact }) => {
  return (
    <Card component="li" sx={{ minWidth: 300, minHeight: 400 }}>
      <CardCover>{image}</CardCover>
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
  );
};
export default CardComponent;
