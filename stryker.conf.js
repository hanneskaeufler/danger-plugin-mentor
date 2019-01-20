module.exports = function(config) {
  config.set({
    coverageAnalysis: "off",
    mutate: ["src/**/*.ts", "!src/**/*.test.ts", "!src/all_tips.ts"],
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    tsconfigFile: "tsconfig.json"
  });
};
