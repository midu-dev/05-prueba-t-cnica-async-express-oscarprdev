import { validateId, validateUserBody } from '../common/index.js';
import { updateUserByIdFromDatabase } from './update-users.model.js';

export const updateUser = async (req, res) => {
	try {
		const params = req.params;
		const { id, content } = req.body;

		const validIdParam = validateId(Number(params.id));
		const validId = validateId(Number(id));
		const validUserBody = validateUserBody({ content });

		const users = await updateUserByIdFromDatabase(validIdParam, { id: validId, content: validUserBody.content });

		res.status(200).json(users);
	} catch (error) {
		res.status(error.status || 400).json({ message: error.message });
	}
};
