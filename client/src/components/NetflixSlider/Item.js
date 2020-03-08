import React from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Modal from "./../modal/PCmodal";
import Vote from "../upndownVote/ticker";
import Mark from "./Mark";
import "./Item.scss";

const Item = ({ podcast }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === podcast.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive
          })}
        >
          <div>
          <img src={podcast.thumbnail} alt="" />
          <div class="componentLine"> <Modal /> </div>
          <div class="componentLine"> <Vote /> </div>
          </div>
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
