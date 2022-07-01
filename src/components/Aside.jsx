import React from "react";
import {
  ThumbsUp,
  ClockAfternoon,
  Queue,
  ClockCounterClockwise,
  Compass,
} from "phosphor-react";

const Aside = () => {
  return (
    <>
      <div className="ff-container-aside-wrap">
        <div className="ff-container-aside">
          <div className="ff-container-aside-chip">
            <Compass size={34} className="ff-aside-chip-icon" weight="bold" />

            <div className="ff-aside-chip-text">Explore</div>
          </div>

          <div className="ff-container-aside-chip">
            <ThumbsUp size={34} className="ff-aside-chip-icon" weight="bold" />

            <div className="ff-aside-chip-text">Liked Videos</div>
          </div>

          <div className="ff-container-aside-chip">
            <Queue size={34} className="ff-aside-chip-icon" weight="bold" />
            <div className="ff-aside-chip-text">Playlists</div>
          </div>

          <div className="ff-container-aside-chip">
            <ClockAfternoon
              size={34}
              className="ff-aside-chip-icon"
              weight="bold"
            />
            <div className="ff-aside-chip-text">Watch later</div>
          </div>

          <div className="ff-container-aside-chip">
            <ClockCounterClockwise
              size={34}
              className="ff-aside-chip-icon"
              weight="bold"
            />
            <div className="ff-aside-chip-text">History</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;