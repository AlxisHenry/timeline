import React, { Component } from "react";
import TimelineCard from "./TimelineCard";
import { useState, useEffect } from "react";

type TimelineProps = {
  title: string;
  limit: number;
  order: boolean;
};

class Timeline extends  React.Component {
  
  render() {
    return (
      <div className="timeline">
        <h2>Timeline</h2>
        <TimelineCard
          image="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          title="John Doe"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />  
        <TimelineCard
          image="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          title="John Doe"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <TimelineCard
          image="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          title="John Doe"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    )
  }

}

export default Timeline;
