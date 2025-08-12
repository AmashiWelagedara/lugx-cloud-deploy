# Use an official NGINX image as the base
FROM nginx:alpine

# Copy frontend static files to NGINX html folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
