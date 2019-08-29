FROM node:carbon

# Set a Root directory
WORKDIR .

#Create a Directory for Docker image output

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./
 
#Install Node Dependency 
RUN npm install


# Bundle app source
COPY . .

EXPOSE 3001
CMD [ "node", "index.js" ]