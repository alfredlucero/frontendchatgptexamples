/** @type {import('./$types').PageServerLoad}  */
export async function load({ cookies }) {
	const user = cookies.get('sessionId');

	return { user };
}

/** @type {import('./$types').Actions } */
export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		// const user = await db.getUser(email, password);
		cookies.set('sessionId', 'loggedInUserSessionId');

		return { success: true };
	},
	register: async (event) => {
		// TODO: register user
	}
};
