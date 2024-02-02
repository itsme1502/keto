import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Carousel from "react-material-ui-carousel";

export default function Stories({ success, purpose, description }) {
  const theme = useTheme();

  return (
    <>
      <div className="flex justify-center my-5">
        <Card
          sx={{
            display: "flex",
            width: 700,
            height: 300,
            borderRadius: 1.5,
            marginBottom: 2,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 500, height: 300 }}
            image="https://kettocdn.gumlet.io/media/banner/0/97/image/50e08ce31ef3bfa184cadd9ec164b8ecee8bb0f0.jpg?w=auto&dpr=1.3"
            alt="Live from space album cover"
          />
          <div className="flex">
            <Box>
              <CardContent
                sx={{
                  flex: "1 0 auto",
                  marginTop: "10px",
                  justifyContent: "center",
                  // marginLeft : "10"
                }}
              >
                <Typography variant="subtitle1" component="div">
                  <span className="flex justify-center">{purpose}</span>
                </Typography>
              </CardContent>
              <Box
                sx={{
                  marginLeft: "15px",
                  display: "flex-grow",
                  marginRight: "15px",
                }}
              >
                <span className="flex justify-center">{description}</span>
              </Box>
            </Box>
          </div>
        </Card>
      </div>
    </>
  );
}
