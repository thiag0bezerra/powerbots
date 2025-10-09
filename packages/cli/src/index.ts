import { greet } from '@powerbots/core';

/**
 * Função principal da aplicação CLI.
 * 
 * Executa a lógica principal do programa, exibindo uma saudação
 * personalizada no console.
 * 
 * @remarks
 * Esta função utiliza a função {@link @powerbots/core!greet} do pacote core
 * para gerar a saudação.
 * 
 * @example
 * ```typescript
 * main();
 * // Output: Hello, World!
 * ```
 * 
 * @public
 */
export function main(): void {
  // Using console.log is acceptable here as this is the CLI entry point
  // eslint-disable-next-line no-console
  console.log(greet('World'));
}
