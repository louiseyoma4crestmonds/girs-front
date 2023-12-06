# Specify the base image for the docker container so that we can build upon it
FROM node:16

# Specify the working directory. This directory should be a directory that exists in the docker container. 
WORKDIR /app

# Copy the contents of package.json to the working directory which is /app in this case so that docker is aware of he application dependencies to install
# note that the . in the command below specifies that the file will be copied to /app which is the working directory
COPY package.json .

# Install all dependencies with yarn install.
RUN yarn install

# Copy the entire project files into the /app directory of the docker container
# The first . points to the application directory and the second . points to the docker working directory which is /app in this case
COPY . .

# Expose port 6000 because we want the next app to run on that port.
EXPOSE 3000

# Execute our app
CMD ["yarn", "dev"]