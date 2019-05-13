FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY /public/bundle.js /usr/share/nginx/html
COPY /public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
