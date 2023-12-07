import { users } from '../../data/index.js';

export const updateUserByIdFromDatabase = async (currentId, { id, content }) => {
	const userId = users.findIndex((user) => user.id === currentId);

	if (userId === -1) {
		throw new Error('User not valid');
	}

	users.splice(userId, 1, { id, content });

	return users;
};
