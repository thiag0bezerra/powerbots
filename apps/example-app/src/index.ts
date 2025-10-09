import { greet } from '@powerbots/core';

/**
 * Example application demonstrating the use of PowerBots core package.
 *
 * This app shows how to use the greet function from the core package.
 */
function main(): void {
  const name = process.argv[2] || 'World';
  const greeting = greet(name);
  // eslint-disable-next-line no-console
  console.log(greeting);
}

// Run the main function
main();