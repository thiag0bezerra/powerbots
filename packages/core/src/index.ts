/**
 * Gera uma saudação personalizada.
 * 
 * @param name - Nome da pessoa a ser saudada
 * @returns Uma string contendo a saudação formatada
 * 
 * @example
 * ```typescript
 * const greeting = greet('Alice');
 * console.log(greeting); // "Hello, Alice!"
 * ```
 * 
 * @public
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
