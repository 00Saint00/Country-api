import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import "./Body.css";
import { useSelector } from "react-redux";

const Body = ({ image, country, population, region, capital }) => {
  const { darkMode } = useSelector((state) => state.darkModeReducer);

  return (
    <div>
      <div>
        <Link to={`/${country}/details`}>
          <Card
            className={darkMode ? "darkCards" : "myCards"}
            variant="standard"
          >
            <CardMedia
              sx={{ height: 170, width: 250 }}
              image={image}
              title="flag"
            />
            <CardContent className={darkMode ? "cardConDarkMode" : "cardCon"}>
              <Typography
                variant="h5"
                component="div"
                className={darkMode ? "typeDark" : "type"}
              >
                <h3>
                  <strong> {country}</strong>
                </h3>
              </Typography>
              <Typography className={darkMode ? "typeDark" : "type"}>
                <strong>Population :</strong>
                {population}
              </Typography>
              <Typography className={darkMode ? "typeDark" : "type"}>
                <strong>Region: </strong>
                {region}
              </Typography>
              <Typography className={darkMode ? "typeDark" : "type"}>
                <strong>Capital: </strong>
                {capital}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Body;
