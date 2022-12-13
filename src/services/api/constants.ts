import { Octokit } from "@octokit/core";
import * as dotenv from "dotenv";

dotenv.config();

export const GH_API = new Octokit({ auth: process.env.GH_TOKEN });
export const GH_USER = process.env.GH_USER;
export const GH_TEST_REPOSITORY = process.env.GH_TEST_REPOSITORY;

export const gh = async (uri: string, properties: {}) => {
  return await GH_API.request(`GET ${uri}`, properties);
};
