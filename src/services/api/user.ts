import { gh } from "./constants";

export const getUser = async (properties: {} = {}) => {
  const reponse = await gh("/user", {
    ...properties,
  });
  return [reponse.status, reponse.data];
};
