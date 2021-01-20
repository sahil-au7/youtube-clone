import React from "react";
import "./VideoRow.css";
const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h2>{title}</h2>
        <p className="videoRow__headline">
          {channel} · <span>{subs} Subscribers</span> · {views} views ·{" "}
          {timestamp}{" "}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
