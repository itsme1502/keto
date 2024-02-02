import React from "react";
import Carousel from "react-material-ui-carousel";
import Stories from "./Stories";

const dummyinfo = {
  purpose: "You are the reason Suraj gets to live his dream",
  description:
    "You are the reason Suraj gets to live his dream Our son’s cancer had relapsed after 2.5 years of chemotherapy we knew we couldn’t afford his life-saving treatment. But thanks to your donations prayers, he underwent successful treatment is recovering well. May God bless you all for saving his life!-Dhanasar (Father)",
};

function SuccessCarousel() {
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold">Success Stories</h1>
      <div>
        <Carousel>
          <Stories
            purpose={dummyinfo.purpose}
            description={dummyinfo.description}
          />
          <Stories
            purpose={dummyinfo.purpose}
            description={dummyinfo.description}
          />
        </Carousel>
      </div>
    </>
  );
}

export default SuccessCarousel;
