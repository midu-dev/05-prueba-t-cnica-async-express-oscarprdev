import { validateId, validateUserBody } from '../common/index.js';
import { patchUserByIdFromDatabase } from './patch-users.model.js';

export const patchUser = async (req, res) => {
	try {
		const params = req.params;
		const { content } = req.body;

		const validIdParam = validateId(Number(params.id));
		const validUserBody = validateUserBody({ content });

		const users = await patchUserByIdFromDatabase(validIdParam, { content: validUserBody.content });

		res.status(200).json(users);
	} catch (error) {
		res.status(error.status || 400).json({ message: error.message });
	}
};
