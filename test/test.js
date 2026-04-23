
import { validate } from 'jsonschema';
import { personSchema } from '../src/api-v1/schemas/schema.js';

const obj = {
    "name": "Pedro",
    "email": "phedro@gmail.com",
    "phone": "98645645656",
    "organization": null,
    "tags": [
        "friends",
        "brothers"
    ]
};

const validateResult = validate(obj, personSchema);

if (!validateResult.valid) {
    const errors = validateResult.errors.map(error => error.message);
    console.log({ error: 'Validation failed', details: errors });
} else {
    console.log('Validation succeeded');
}