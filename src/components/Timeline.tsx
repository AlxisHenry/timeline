import React, { Component, useState, useEffect } from "react";
import TimelineCard from "./TimelineCard";
import "@components/css/Timeline.css";
import Token from "./Token";

type Limit = 5 | 10 | 15;
type Order = "ASC" | "DESC";

type TimelineProps = {
  title: string;
  limit: Limit;
  order: Order;
};

type Repository = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

const Timeline: React.FC<TimelineProps> = (props) => {
  const [repos, setRepos] = useState<Repository[]>([]);

  let token = import.meta.env.VITE_GH_TOKEN;

  if (!token) {
    token = localStorage.getItem("token")
  }

  useEffect(() => {
    const headers = new Headers({
      Authorization: `Token ${token}`,
    });
    fetch("https://api.github.com/user/repos", { headers })
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  if (repos.hasOwnProperty("message") && repos.hasOwnProperty("documentation_url")) {
    return (
      <div className="timeline">
        <div className="timeline_title">
          <h2>{props.title}</h2>
          <Token/>
        </div>
        <div>
          <p style={{color: "red"}}>Sorry, but your token is not valid.</p>
        </div>
      </div>
    );
  } else {
    const repositories = repos.sort((a: Repository, b: Repository) => {
      const dateA = new Date(a.updated_at);
      const dateB = new Date(b.updated_at);
  
      if (props.order === "ASC") {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    });
  
    return (
      <div className="timeline">
        <div className="timeline_title">
          <h2>{props.title}</h2>
        </div>
        <div className="timeline_cards">
          {repositories.map((repository: Repository) => (
            <TimelineCard key={repository.id} repository={repository} />
          ))}
        </div>
      </div>
    );
  }
};

export default Timeline;
