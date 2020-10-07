const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Express Service with Swagger",
            version: "1.0.0",
            description: "a Rest api using swagger and express.",
        },
        servers: [
            {
                url: "http://localhost:4000",
            },
        ],
    },
    apis: ["./src/models/*.js", "./src/routers/*.js"],
};

export default options;
