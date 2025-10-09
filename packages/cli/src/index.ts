import * as p from '@clack/prompts';
import color from 'picocolors';
import { greet } from '@powerbots/core';

/**
 * Função principal da aplicação CLI.
 * 
 * Executa a lógica principal do programa, exibindo prompts interativos
 * usando a biblioteca Clack para coletar informações do usuário.
 * 
 * @remarks
 * Esta função utiliza a biblioteca {@link https://github.com/bombshell-dev/clack | @clack/prompts}
 * para criar uma interface CLI interativa e utiliza a função {@link @powerbots/core!greet} 
 * do pacote core para gerar a saudação.
 * 
 * @example
 * ```typescript
 * await main();
 * ```
 * 
 * @public
 */
export async function main(): Promise<void> {
  // Clear console for better UX - this is acceptable for CLI entry point
  // eslint-disable-next-line no-console
  console.clear();

  p.intro(color.bgCyan(color.black(' PowerBots CLI ')));

  const userName = await p.text({
    message: 'What is your name?',
    placeholder: 'Enter your name',
    validate: (value: string) => {
      if (!value) return 'Name is required!';
    },
  });

  if (p.isCancel(userName)) {
    p.cancel('Operation cancelled.');
    process.exit(0);
  }

  const greeting = greet(userName);
  
  p.note(color.green(greeting), 'Greeting');

  p.outro(color.cyan('Thank you for using PowerBots CLI!'));
}

if (import.meta.main) {
  main().catch(console.error);
}
