import { describe, it, expect } from "vitest";
import { getRepositories, getRepository, formatRepository } from "@services/api/index";

let testRepositoryName: string = process.env.VITE_GH_TEST_REPOSITORY ?? ""

describe('Repositories', () => {
  it("should be able to get all repositories", async () => {
    const [status, repositories] = await getRepositories();
    expect(status).toBe(200);
    expect(repositories).toBeInstanceOf(Array);
    expect(repositories.length).toBeGreaterThan(0);
  });
  it("should be able to get the repository specified in the .env", async () => {
    const [status, repository] = await getRepository(testRepositoryName);
    expect(status).toBe(200);
    expect(repository).toBeInstanceOf(Object);
    expect(repository).toHaveProperty("name");
    expect(repository.name).toBe(testRepositoryName);
  });
  it("should be able to get the count of repositories owned by the user", async () => {
    const [status, repositories] = await getRepositories();
    expect(status).toBe(200);
    expect(repositories.length).toBeGreaterThan(0);
  });
  it("should be able to format repository object", async () => {
    const [status, repository] = await getRepository(testRepositoryName);
    expect(status).toBe(200);
    expect(repository).toBeInstanceOf(Object);
    expect(repository).toHaveProperty("name");
    expect(repository.name).toBe(testRepositoryName);
		let formattedRepository = formatRepository(repository);
		expect(formattedRepository).toMatchObject({
			repository: {
				name: repository.name,
				description: repository.description,
				stargazers_count: repository.stargazers_count,
				forks_count: repository.forks_count,
				updated_at: repository.updated_at
			}
		})
  });
});
