import { gh } from "./constants";

export const getRepositories = async (properties: {} = {}) => {
  console.log("getRepositories", properties)
  const reponse = await gh("/users/{username}/repos", {
    username: process.env.GH_USER,
    ...properties,
  });
  return [reponse.status, reponse.data];
};

export const getRepository = async (repository: string, properties: {} = {}) => {
  const reponse = await gh("/repos/{owner}/{repo}", {
    owner: process.env.GH_USER,
    repo: repository,
    ...properties,
  });
  return [reponse.status, reponse.data];
};
