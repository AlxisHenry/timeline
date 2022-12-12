import { describe, it, expect } from 'vitest'
import { getRepositories, getRepository } from './utils'

describe('Repositories', () => {
	it('should be able to get all repositories', async () => {
		const [status, repositories] = await getRepositories()
		expect(status).toBe(200)
		expect(repositories).toBeInstanceOf(Array)
		expect(repositories.length).toBeGreaterThan(0)
	})
	it('should be able to get the repository specified in the .env', async () => {
		const [status, repository] = await getRepository(process.env.GH_TEST_REPOSITORY)
		expect(status).toBe(200)
		expect(repository).toBeInstanceOf(Object)
		expect(repository).toHaveProperty('name')
		expect(repository.name).toBe(process.env.GH_TEST_REPOSITORY)
	})
	it('should be able to get the count of repositories owned by the user', async () => {
		const [status, repositories] = await getRepositories()
		expect(status).toBe(200)
		expect(repositories.length).toBeGreaterThan(0)
	})
})