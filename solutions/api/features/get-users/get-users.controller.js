import { validateId } from '../common/index.js';
import { getUserByIdFromDatabase, getUsersFromDatabase } from './get-users.model.js';

export const getUsers = async (req, res) => {
	try {
		const users = await getUsersFromDatabase();

		res.status(200).json(users);
	} catch (error) {
		res.status(error.status || 400).json({ message: error.message });
	}
};

export const getUserById = async (req, res) => {
	try {
		const { id } = req.params;

		const validId = validateId(Number(id));
		const user = await getUserByIdFromDatabase(validId);

		res.status(200).json(user);
	} catch (error) {
		res.status(error.status || 400).json({ message: error.message });
	}
};
