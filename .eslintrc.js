module.exports = {
    env: {
        browser: false,
        node: true,
    },

    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:jest/recommended",
        "plugin:jest/style",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint", "jest"],
    root: true,
    rules: {
        indent: [
            "error",
            4,
            {
                MemberExpression: 1,
                SwitchCase: 1,
            },
        ],
        "react/prop-types": ["off"],
        "no-await-in-loop": "error",
        "no-return-await": "error",
        "no-array-constructor": "error",
        "@typescript-eslint/no-explicit-any": ["off"],
        eqeqeq: "error",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
