import { users } from '../../data/index.js';

export const patchUserByIdFromDatabase = async (currentId, { content }) => {
	const userId = users.findIndex((user) => user.id === currentId);

	if (userId === -1) {
		throw new Error('User not valid');
	}

	users.splice(userId, 1, { id: currentId, content });

	return users;
};
