# ---- Build the static docs ----
FROM oven/bun:1-debian AS builder
WORKDIR /app

# Install deps first for layer caching.
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Belt-and-braces for a known bun bug with scoped optional native deps: if the
# satteri code-highlighter binary was downloaded but not hoisted, link it so the
# build can resolve it. A no-op when bun already hoisted it (the common case).
RUN mkdir -p node_modules/@bruits && \
    for d in node_modules/.bun/@bruits+satteri-*/node_modules/@bruits/*; do \
      [ -e "$d" ] && ln -sfn "$(readlink -f "$d")" "node_modules/@bruits/$(basename "$d")" || true; \
    done; true

COPY . .
RUN bun run build

# ---- Serve the static output ----
FROM nginx:alpine
# Files live under /docs on disk so the base:/docs asset URLs resolve without
# any path rewriting at the proxy.
COPY --from=builder /app/dist /usr/share/nginx/html/docs
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
