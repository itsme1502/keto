import React from "react";
import MediaCard from "./Card";
import Carousel from "react-material-ui-carousel";
import CardContainer from "./CardContainer";

const dummyData = {
  title:
    " My Little Boy Can’t Breathe, And I’m Helpless. Please Save Him For Me .",
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

const dummyinfo = {
  success: "Success Stories",
  purpose: "You are the reason Suraj gets to live his dream",
  description:
    "You are the reason Suraj gets to live his dream Our son’s cancer had relapsed after 2.5 years of chemotherapy we knew we couldn’t afford his life-saving treatment. But thanks to your donations prayers, he underwent successful treatment is recovering well. May God bless you all for saving his life!-Dhanasar (Father)",
};

const array3 = [dummyinfo, dummyinfo, dummyinfo];


const array = [dummyData, dummyData, dummyData];
const array2 = [dummyData1, dummyData,dummyData1];
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
