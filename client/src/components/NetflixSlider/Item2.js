import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import Modal from "../modal/Moviemodal";
import Vote from "../upndownVote/ticker";
import "./Item.scss";

const Item2 = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.imdbID;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive
          })}
        >
          <div>
          <img src={movie.Poster} alt="" />
          <div class="componentLine"> <Modal /> </div>
          <div class="componentLine"> <Vote /> </div>
          </div>
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item2;
