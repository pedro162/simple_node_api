export const personSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object",
    "properties": {
        "id": {
            "type": "integer"
        },
        "name": {
            "type": "string",
            "description": "Nome da referida pessoa"
        },
        "email": {
            "type": "string",
            "description": "Endereço eletrônico da pessoa"
        },
        "phone": {
            "type": "string",
            "description": "Endereço eletrônico da pessoa"
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "required": [
        "name",
        "email"
    ],
    "example": {
        "id": 5,
        "name": "Francis Ford Copolla",
        "email": "copolla@hollywood.com",
        "phone": "001-124-2111",
        "organization": null,
        "tags": [
            "cinema",
            "trabalho"
        ]
    }
}