import { github } from "./constants";

/**
 * @param {object} properties
 * @returns
 */
const getUser = async (properties = {}) => {
  const reponse = await github("/user", {
    ...properties,
  });
  return [reponse.status, reponse.data];
};
