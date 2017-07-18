module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "plugins": ["standard", "promise"],
    "rules": {
        // "indent": ["error", 4],
        // "linebreak-style": ["error", "unix"],
        // "quotes": ["error", "single"],
        // "semi": ["error", "never"],
        "no-useless-escape": "off",
        "node/no-deprecated-api": "off"
    }
};