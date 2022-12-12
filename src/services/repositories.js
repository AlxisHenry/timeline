import { github } from "./constants";

/**
 * @param {object} properties
 * @returns
 */
const getRepositories = async (properties = {}) => {
  const reponse = await github("/users/{username}/repos", {
    username: process.env.GH_USER,
    ...properties,
  });
  return [reponse.status, reponse.data];
};

/**
 * @param {string} repository
 * @param {object} properties
 * @returns
 */
const getRepository = async (repository, properties = {}) => {
  const reponse = await github("/repos/{owner}/{repo}", {
    owner: process.env.GH_USER,
    repo: repository,
    ...properties,
  });
  return [reponse.status, reponse.data];
};
