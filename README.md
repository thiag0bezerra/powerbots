# Powerbots

Monorepo TypeScript moderno usando pnpm workspaces e TypeScript Project References.

## Estrutura

```
powerbots/
├── packages/
│   ├── core/               # Pacote core
│   └── cli/                # Pacote CLI (depende de core)
├── package.json            # Configuração root
├── pnpm-workspace.yaml     # Definição do workspace
├── tsconfig.json           # Config TypeScript root
└── tsconfig.base.json      # Config TypeScript base compartilhada
```

## Comandos

```bash
# Instalar dependências
pnpm install

# Build de todos os pacotes
pnpm run build

# Typecheck
pnpm run typecheck

# Limpar builds
pnpm run clean

# Gerar documentação
pnpm run docs

# Gerar documentação em modo watch
pnpm run docs:watch

# Gerar documentação em JSON
pnpm run docs:json
```

## Pacotes

- **@powerbots/core** - Funcionalidades core
- **@powerbots/cli** - Aplicação CLI que usa core

## Características

- **pnpm workspaces**: Gerenciamento eficiente de pacotes
- **TypeScript Project References**: Build incremental e isolamento de projetos
- **Composite Projects**: Suporte completo a referências entre pacotes
- **Modern TypeScript**: ES2022, NodeNext module resolution
- **Workspace Protocol**: Dependências locais usando `workspace:*`

## Configuração

### pnpm-workspace.yaml
Define os pacotes do monorepo:
```yaml
packages:
  - 'packages/*'
```

### tsconfig.base.json
Configuração TypeScript base compartilhada entre todos os pacotes.

### TypeScript Project References
Cada pacote declara suas dependências em `tsconfig.json` usando `references`.

## Documentação

O projeto utiliza [TypeDoc](https://typedoc.org/) para gerar documentação automática da API.

- Documentação gerada em: `docs/`
- Guia completo: [DOCUMENTATION.md](./DOCUMENTATION.md)
- Comandos: `pnpm docs`, `pnpm docs:watch`, `pnpm docs:json`

A documentação é gerada a partir de comentários TSDoc no código-fonte.