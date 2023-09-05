const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate(
            {
                body: req.body,
            },
            { abortEarly: false }
        );
        return next();
    } catch (error) {
        console.log(error.errors);
        const errors = {};
        error.inner.map((field) => {
            errors[field.path.replace("body.", "")] = field.errors;
        });
        res.status(422).json({
            message: "Validation error",
            errors: errors,
        });
    }
};

module.exports = validate;
