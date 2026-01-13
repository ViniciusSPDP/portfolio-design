# ETAPA 1: Dependências
FROM node:20-alpine AS deps
WORKDIR /app

# Copia os arquivos de dependência
COPY package.json package-lock.json* ./

# AQUI ESTÁ A CORREÇÃO:
# Adicionei --legacy-peer-deps para ignorar o conflito entre React 19 e Lenis
RUN npm ci --legacy-peer-deps


# ETAPA 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilita telemetria (Corrigido para sintaxe moderna com =)
ENV NEXT_TELEMETRY_DISABLED=1

# Roda o build
RUN npm run build


# ETAPA 3: Runner (Produção)
FROM node:20-alpine AS runner
WORKDIR /app

# Corrigido para sintaxe moderna com =
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia a pasta public
COPY --from=builder /app/public ./public

# Prepara as pastas com permissão
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copia o Standalone otimizado
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]