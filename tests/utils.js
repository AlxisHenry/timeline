import { Octokit } from '@octokit/core'
import * as dotenv from 'dotenv'

dotenv.config()

const octokit = new Octokit({ auth: process.env.GH_TOKEN })

/**
 * 
 * @param {string} url
 * @param {object} properties
 */
export const github = async (uri, properties = {}) => {
	return await octokit.request(`GET ${uri}`, properties)
}

/**
 * @param {object} properties 
 * @returns 
 */
export const getRepositories = async (properties = {}) => {
	const reponse = await github("/users/{username}/repos", {
		username: process.env.GH_USER,
		...properties
	})
	return [ reponse.status, reponse.data ]
}

/**
 * @param {string} repository
 * @param {object} properties
 * @returns 
 */
export const getRepository = async (repository, properties = {}) => {
	const reponse = await github('/repos/{owner}/{repo}', {
		owner: process.env.GH_USER,
		repo: repository,
		...properties
	})
	return [ reponse.status, reponse.data ]
}

/**
 * @param {object} properties
 * @returns
 */
export const getUser = async (properties = {}) => {
	const reponse = await github('/user', { 
		...properties 
	})
	return [ reponse.status, reponse.data ]
}