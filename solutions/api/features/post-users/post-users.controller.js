import { validateUserBody } from '../common/index.js';
import { postUsersToDatabase } from './post-users.model.js';

export const postUsers = async (req, res) => {
	try {
		const { content } = req.body;

		const validUser = validateUserBody({ content });

		const user = await postUsersToDatabase(validUser);

		res.json(user);
	} catch (error) {
		res.status(error.status || 400).json({ message: error.message });
	}
};
