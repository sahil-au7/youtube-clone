import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image=""
        channel="Clever programmer"
        verified
        subs="659k"
        noOfVideos={323}
        description="YOu can find awesome programming with us th si the sit e great wau teo learn d=coding woth enew habn=dson projecs"
      />
      <hr />
      <h2 className="searchPage__title">Latest form Clever Programmer</h2>
      <VideoRow
        views="1.4M"
        subs="660k"
        description="Do you want a free one hour training ..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a youtube clone with REACT JS using firebase"
        image="https://via.placeholder.com/150"
      />
      <VideoRow
        views="1.4M"
        subs="660k"
        description="Do you want a free one hour training ..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a youtube clone with REACT JS using firebase"
        image="https://via.placeholder.com/150"
      />
      <VideoRow
        views="1.4M"
        subs="660k"
        description="Do you want a free one hour training ..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a youtube clone with REACT JS using firebase"
        image="https://via.placeholder.com/150"
      />
      <VideoRow
        views="1.4M"
        subs="660k"
        description="Do you want a free one hour training ..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a youtube clone with REACT JS using firebase"
        image="https://via.placeholder.com/150"
      />
      <VideoRow
        views="1.4M"
        subs="660k"
        description="Do you want a free one hour training ..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Lets build a youtube clone with REACT JS using firebase"
        image="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default SearchPage;
