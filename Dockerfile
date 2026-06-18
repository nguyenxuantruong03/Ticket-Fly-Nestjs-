# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Generate Client mà không cần kết nối DB
# Prisma 7 vẫn cho phép generate dựa trên file schema
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" npx prisma generate

# Build ứng dụng
RUN ./node_modules/.bin/tsc -p tsconfig.build.json

# Stage 2: Runtime
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Thay vì copy cả folder, hãy copy từng file quan trọng
COPY --from=builder /app/prisma/schema.prisma ./prisma/schema.prisma
COPY --from=builder /app/prisma/config.ts ./prisma/config.ts

# Thay đổi dòng cuối trong Dockerfile của NestJS:
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm run start:dev; else node -r tsconfig-paths/register dist/src/main.js; fi"]