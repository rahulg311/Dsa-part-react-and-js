// Simple Waterfall Executor
async function waterfall(tasks, initialValue) {
  let result = initialValue;
  for (let task of tasks) {
    result = await task(result); // har task ko pichle result milega
  }
  return result;
}

// Example tasks
const tasks = [
  async () => 1,                         // Step 1 → return 1
  async (n) => n + 2,                    // Step 2 → 1 + 2 = 3
  async (n) => n * 3,                    // Step 3 → 3 * 3 = 9
  async (n) => `Final Result: ${n}`      // Step 4 → Final Result: 9
];

// Run
waterfall(tasks, null).then(console.log);
