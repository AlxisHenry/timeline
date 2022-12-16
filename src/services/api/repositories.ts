import { gh } from "./index";

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
