import React, { Component } from "react";
import "@components/css/TimelineCard.css";
import moment from 'moment';

export type TimelineCardProps = {
  repository: {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
  }
};

class TimelineCard extends React.Component<TimelineCardProps> {
  render() {
    return (
      <div className="repository-card">
        <h3>{ this.props.repository.name }</h3>
        <p>{ this.props.repository.description }</p>
        <div className="repository-stats">
          <div className="repository-stat-element repository-stargazers_count">
            <i className="fa fa-star" aria-hidden="true"></i>
            <p>{ this.props.repository.stargazers_count }</p>
          </div>
          <div className="repository-stat-element repository-forks_count">
            <i className="fa fa-code-fork" aria-hidden="true"></i>
            <p>{ this.props.repository.forks_count }</p>
          </div>
        </div>
        <span>updated { moment(this.props.repository.updated_at).fromNow() }</span>
      </div>
    );
  }
}

export default TimelineCard;
