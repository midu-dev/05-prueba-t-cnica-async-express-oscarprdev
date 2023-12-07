export const validateId = (id) => {
	if (!id || typeof id !== 'number') {
		throw new Error('Id is not valid');
	}

	return id;
};

export const validateUserBody = ({ content }) => {
	if (!content || typeof content !== 'string') {
		throw new Error('Content is not valid');
	}

	return { content };
};
