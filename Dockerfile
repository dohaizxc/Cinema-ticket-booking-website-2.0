   # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
   FROM node:18 AS builder
   WORKDIR /app
   COPY . .
   RUN yarn install
   RUN yarn run build

   # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
   FROM nginx:1.16.0-alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
#    RUN rm /etc/nginx/conf.d/default.conf
#    COPY nginx.conf /etc/nginx/conf.d
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]