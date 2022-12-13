import { describe, it, expect } from 'vitest'
import { getUser } from '@services/api/index'

describe('Users', () => {
	it('should be able to get the current user', async () => {
		const [status, user] = await getUser()
		expect(status).toBe(200)
		expect(user).toBeInstanceOf(Object)
		expect(user).toHaveProperty('login')
		expect(user.login.toLowerCase()).toBe(process.env.GH_USER)
	})
})