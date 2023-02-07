import { Octokit } from "@octokit/core";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * Environments variables
 */
export const token = import.meta.env.VITE_GH_TOKEN;
export const user = import.meta.env.VITE_GH_USER;
export const testRepository = import.meta.env.VITE_GH_TEST_REPOSITORY;

/**
 * Github API Request
 */
export const github = new Octokit({ auth: token });
export const gh = async (uri: string, properties: {}) => {
  return await github.request(`GET ${uri}`, properties);
};
