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

  if (!token || token === "<your_github_token>") {
    token = localStorage.getItem("token") ?? "";
  }

  const isOk = (): boolean => !repos.hasOwnProperty("message") && !repos.hasOwnProperty("documentation_url");

  useEffect(() => {
    fetch("https://api.github.com/user/repos", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => response.json())
      .then((repositories) => setRepos(repositories));
  }, []);

  const formattedRepositories = (): Repository[] => {
    let repositories = repos;
    switch (props.order) {
      case "ASC":
        repositories.sort((a, b) => {
          return new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime();
        });
        break;
      case "DESC":
        repositories.sort((a, b) => {
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });
        break;
    }
    return repositories.slice(0, props.limit);
  }

  return (
    <div className="timeline">
      <div className="timeline_title">
        <h2>{props.title}</h2>
        {
          isOk() ? <></> : <Token />
        }
      </div>
      {
        isOk() ? <>
          <div className="timeline_cards">
            {formattedRepositories().map((repository: Repository) => (
              <TimelineCard key={repository.id} repository={repository} />
            ))}
          </div>
        </> : <p style={{ color: "red" }}>Sorry, but your token is not valid.</p>
      }
    </div>
  );
};

export default Timeline;
