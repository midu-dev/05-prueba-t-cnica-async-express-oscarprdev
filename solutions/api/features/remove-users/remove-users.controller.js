import { validateId } from '../common/index.js';
import { removeUserByIdFromDatabase } from './remove-users.model.js';

export const removeUserById = async (req, res) => {
	try {
		const { id } = req.params;

		const validId = validateId(Number(id));

		const { userRemoved, users } = await removeUserByIdFromDatabase(validId);

		res.status(200).json({
			userRemoved,
			users,
		});
	} catch (error) {
		res.status(error.status || 400).json({ message: error.message });
	}
};
