import { describe, it, expect } from 'vitest'
import { getUser } from '@services/api'

let username: string = process.env.VITE_GH_USER ?? ""

describe('Users', () => {
	it('should be able to get the current user', async () => {
		const [status, user] = await getUser()
		expect(status).toBe(200)
		expect(user).toBeInstanceOf(Object)
		expect(user).toHaveProperty('login')
		expect(user.login.toLowerCase()).toBe(username)
	})
})