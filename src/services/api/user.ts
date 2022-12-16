import { gh } from "./index";

export const getUser = async (properties: {} = {}) => {
  const response = await gh("/user", {
    ...properties,
  });
  return [response.status, response.data];
};
