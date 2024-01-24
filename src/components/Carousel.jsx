import React from "react";
import MediaCard from "./Card";
import Carousel from "react-material-ui-carousel";
import CardContainer from "./CardContainer";

const dummyData = {
  title:
    " My Little Boy Can’t Breathe, And I’m Helpless. Please Save Him For Me L.",
  requestedby: "By Anyone",
  raised: "₹ 91,03,705 raised out of ",
  goal: "₹1,10,00,000",
  days: "38",
  left: "Days left",
  contribution: "❤️561 supporters",
};

const dummyData1 = {
  title: "sex",
  requestedby: "By Anyone",
  raised: "₹ 91,03,705 raised out of ",
  goal: "₹1,10,00,000",
  days: "38",
  left: "Days left",
  contribution: "❤️561 supporters",
};
const array = [dummyData, dummyData, dummyData];
const array2 = [dummyData1, dummyData,dummyData1];
// array2[0].title = "sex";
function Carousels() {
  return (
    <div>
      <Carousel>
        <CardContainer data={array} />
        <CardContainer data={array2} />
        <CardContainer data={array} />
      </Carousel>
    </div>
  );
}

export default Carousels;
