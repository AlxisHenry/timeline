import React, { Component } from "react";
import "@components/css/TimelineCard.css";

type TimelineCardProps = {
  repository: {
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    homepage: string;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
    visibility: string;
    open_issues: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
  }
};

class TimelineCard extends React.Component<TimelineCardProps> {
  render() {
    return (
      <div className="timeline-card">
        <div className="timeline-card-header">
          {/* <img src={this.props.image} alt={this.props.alt} /> */}
          <h3>{this.props.repository.name}</h3>
        </div>
        <div className="timeline-card-body">
          <p>{this.props.repository.description}</p>
        </div>
      </div>
    );
  }
}

export default TimelineCard;
