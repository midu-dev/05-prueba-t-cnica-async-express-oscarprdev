import { users } from '../../data/index.js';

let initialId = 2;

export const postUsersToDatabase = async ({ content }) => {
	const newUser = {
		id: initialId++,
		content,
	};

	users.push(newUser);

	return newUser;
};
