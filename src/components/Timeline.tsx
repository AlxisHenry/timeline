import React, { Component } from "react";
import TimelineCard from "./TimelineCard";
import { useState, useEffect } from "react";
import "@components/css/Timeline.css";

type Limit = 5 | 10 | 15;
type Order = "ASC" | "DESC";

type TimelineProps = {
  title: string;
  limit: Limit;
  order: Order;
};

class Timeline extends React.Component<TimelineProps> {
  repositories() {
    return [
      {
        name: "Repository1",
        description: "Repository1 Description",
        stargazers_count: 2,
        forks_count: 2,
        updated_at: "2021-01-01T00:00:00Z",
      },
      {
        name: "Repository2",
        description: "Repository2 Description",
        stargazers_count: 2,
        forks_count: 2,
        updated_at: "2021-01-01T00:00:00Z",
      },
      {
        name: "Repository3",
        description: "Repository3 Description",
        stargazers_count: 2,
        forks_count: 2,
        updated_at: "2021-01-01T00:00:00Z",
      },
      {
        name: "Repository4",
        description: "Repository4 Description",
        stargazers_count: 2,
        forks_count: 2,
        updated_at: "2021-01-01T00:00:00Z",
      }
    ];
  }

  render() {
    return (
      <div className="timeline">
        <div className="timeline_title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="timeline_cards">
          {this.repositories().map((repository) => (
            <TimelineCard key={repository.name} repository={repository} />
          ))}
        </div>
      </div>
    );
  }
}

export default Timeline;
