import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Avatar, LinearProgress } from "@mui/material";
import LinearDeterminate from "./ProgressBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function MediaCard({
  title,
  requestedby,
  raised,
  goal,
  days,
  left,
  contribution,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <span className="flex">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography
            variant="body3"
            color="text.secondary"
            className="mt-2.5 ml-2"
            requestedby={requestedby}
          >
            {requestedby}
          </Typography>
        </span>
        <Typography>{raised}</Typography>
        <Typography>{goal}</Typography>
        <LinearDeterminate></LinearDeterminate>
        <AccessTimeIcon></AccessTimeIcon>
        <span className="font-medium">{days}</span>
        <span className="ml-1.5">{left}</span>
        <span className="ml-12">{contribution}</span>
      </CardContent>
      <CardActions>
        <div className="flex flex-grow gap-4">
          <button className="flex-grow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            <FacebookIcon className="mr-1"></FacebookIcon>
            Share
          </button>
          <button className="flex-grow bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Donate
          </button>
        </div>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
