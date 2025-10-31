# Use a Node 20 base image, which is good for development due to its rich tooling
FROM node:20-alpine AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json first
# This ensures Docker can cache the dependency install step
COPY package*.json ./

# Install dependencies. The --location=global flag installs nodemon 
# globally inside the container, which is often easier to run.
# Alternatively, you can install nodemon as a devDependency in your project.
RUN npm install

# Copy the rest of your application code
# This step will be less relevant when using volume mounting, but good practice
COPY . .

# Expose the port your Express app uses (default is 3000)
EXPOSE 3000

# The command to start the application using nodemon.
# This assumes nodemon is installed globally or as a project devDependency.
# It watches for changes and automatically restarts the server.
CMD [ "npm", "run", "dev" ] 

# --- IMPORTANT DEVELOPMENT NOTE ---
# For this CMD to work, you MUST have a 'dev' script in your package.json 
# that typically looks like this: "dev": "nodemon index.js" (or server.js)