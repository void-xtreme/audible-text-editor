FROM node:8
EXPOSE 3000
RUN apt-get update
RUN apt-get install wget festival -y
WORKDIR /tmp
RUN wget http://ucsc.lk/ltrl/public/TTS/003-23-01-2007.zip -O sinhala.zip
RUN unzip sinhala.zip -d /usr/share/festival/voices
RUN chown -R node /home/node 
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node/
RUN mkdir output
COPY . /home/node/
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]