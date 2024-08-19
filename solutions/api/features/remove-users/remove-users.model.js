import { users } from '../../data/index.js';

export const removeUserByIdFromDatabase = async (id) => {
	const userId = users.findIndex((user) => user.id === id);
	const userRemoved = users.find((user) => user.id === id);

	if (userId === -1) {
		throw new Error('User not valid');
	}

	users.splice(userId, 1);

	return {
		userRemoved,
		users,
	};
};
