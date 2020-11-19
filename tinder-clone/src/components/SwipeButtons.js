import React from "react";
import "./SwipeButtons.css";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FavoriteIcon from "@material-ui/icons/Favorite";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButton__replay">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__close">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
