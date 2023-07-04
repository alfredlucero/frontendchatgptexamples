import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad}  */
export async function load({ cookies }) {
	const user = cookies.get('sessionId');

	return { user };
}

/** @type {import('./$types').Actions } */
export const actions = {
	login: async ({ cookies, request, url }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email) {
			return fail(400, { email, missing: true });
		}

		if (!password) {
			return fail(400, { password, missing: true });
		}

		// const user = await db.getUser(email, password);
		cookies.set('sessionId', 'loggedInUserSessionId');

		console.log(url);
		if (url.searchParams.has('redirectTo')) {
			const redirectTo = url.searchParams.get('redirectTo');
			console.log(redirectTo);
			throw redirect(303, redirectTo ?? '/');
		}

		return { success: true };
	},
	register: async (event) => {
		// TODO: register user
	}
};
