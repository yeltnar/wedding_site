FROM caddy:latest

COPY docs /usr/share/caddy

COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 3000
