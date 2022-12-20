import { TimelineCardProps } from "src/components/TimelineCard";
import { gh } from "./index";

type Repository = {
  [key: string]: any;
};

export const getRepositories = async (properties: {} = {}) => {
  const response = await gh("/users/{username}/repos", {
    username: process.env.GH_USER,
    ...properties,
  });
  return [response.status, response.data];
};

export const getRepository = async (repository: string, properties: {} = {}) => {
  const response = await gh("/repos/{owner}/{repo}", {
    owner: process.env.GH_USER,
    repo: repository,
    ...properties,
  });
  return [response.status, response.data];
};

export const formatRepository = (repository: Repository): TimelineCardProps => {
  return {
    repository: {
      name: repository?.name,
      description: repository?.description,
      stargazers_count: repository?.stargazers_count,
      forks_count: repository?.forks_count,
      updated_at: repository?.updated_at,
    }
  };
}