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
        full_name: "Repository1 Full Name",
        html_url: "https:://github.com/Repository1",
        description: "Repository1 Description",
        homepage: "https:://github.com/Repository1",
        stargazers_count: 2,
        forks_count: 2,
        topics: ["topic1", "topic2"],
        visibility: "public",
        open_issues: 4,
        created_at: "2021-01-01T00:00:00Z",
        updated_at: "2021-01-01T00:00:00Z",
        pushed_at: "2021-01-01T00:00:00Z",
      },
      {
        name: "Repository2",
        full_name: "Repository2 Full Name",
        html_url: "https:://github.com/Repository2",
        description: "Repository2 Description",
        homepage: "https:://github.com/Repository2",
        stargazers_count: 2,
        forks_count: 2,
        topics: ["topic1", "topic2"],
        visibility: "public",
        open_issues: 4,
        created_at: "2021-01-01T00:00:00Z",
        updated_at: "2021-01-01T00:00:00Z",
        pushed_at: "2021-01-01T00:00:00Z",
      },
      {
        name: "Repository3",
        full_name: "Repository3 Full Name",
        html_url: "https:://github.com/Repository3",
        description: "Repository3 Description",
        homepage: "https:://github.com/Repository3",
        stargazers_count: 2,
        forks_count: 2,
        topics: ["topic1", "topic2"],
        visibility: "public",
        open_issues: 4,
        created_at: "2021-01-01T00:00:00Z",
        updated_at: "2021-01-01T00:00:00Z",
        pushed_at: "2021-01-01T00:00:00Z",
      },
      {
        name: "Repository4",
        full_name: "Repository4 Full Name",
        html_url: "https:://github.com/Repository4",
        description: "Repository4 Description",
        homepage: "https:://github.com/Repository4",
        stargazers_count: 2,
        forks_count: 2,
        topics: ["topic1", "topic2"],
        visibility: "public",
        open_issues: 4,
        created_at: "2021-01-01T00:00:00Z",
        updated_at: "2021-01-01T00:00:00Z",
        pushed_at: "2021-01-01T00:00:00Z",
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
