import { users } from '../../data/index.js';

export const getUsersFromDatabase = async () => {
	return users;
};

export const getUserByIdFromDatabase = async (id) => {
	const user = users.find((user) => user.id === id);

	if (!user) {
		throw new Error('User is not stored');
	}

	return user;
};
