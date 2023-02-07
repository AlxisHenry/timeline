import { TimelineCardProps } from "src/components/TimelineCard";
import { gh, user } from "./index";
import { testRepository } from "./constants";

type Repository = {
  [key: string]: any;
};

export const getRepositories = async (properties: {} = {}) => {
  const response = await gh("/users/{username}/repos", {
    username: user,
    ...properties,
  });
  return [response.status, response.data];
};

export const getRepository = async (repository: string, properties: {} = {}) => {
  const response = await gh("/repos/{owner}/{repo}", {
    owner: user,
    repo: testRepository,
    ...properties,
  });
  return [response.status, response.data];
};

export const formatRepository = (repository: Repository): TimelineCardProps => {
  return {
    repository: {
      id: repository?.id,
      name: repository?.name,
      description: repository?.description,
      stargazers_count: repository?.stargazers_count,
      forks_count: repository?.forks_count,
      updated_at: repository?.updated_at,
    }
  };
}