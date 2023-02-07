import React, { Component, useState, useEffect } from "react";
import TimelineCard from "./TimelineCard";
import "@components/css/Timeline.css";

type Limit = 5 | 10 | 15;
type Order = "ASC" | "DESC";

type TimelineProps = {
  title: string;
  limit: Limit;
  order: Order;
  token: undefined|string;
};

type Repository = {
  updated_at: string;
}

const Timeline: React.FC<TimelineProps> = (props) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const headers = new Headers({
      "Authorization": `Token <your_github_token>`
    });
    fetch("https://api.github.com/user/repos", { headers })
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error(error));
  }, []);

  
  const repositories = repos.sort((a: Repository, b: Repository) => {
    const dateA = new Date(a.updated_at);
    const dateB = new Date(b.updated_at);
  
    if (props.order === "ASC") {
      return dateA.getTime() - dateB.getTime();
    } else {
      return dateB.getTime() - dateA.getTime();
    }
  });
  
  console.log(repos);
  return (
    <div className="timeline">
      <div className="timeline_title">
        <h2>{props.title}</h2>
      </div>
      <div className="timeline_cards">
        {repositories.map((repository) => (
          <TimelineCard key={repository?.id} repository={repository} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;