FROM ubuntu:22.04
ARG TOKEN
ARG USERNAME
ENV GITHUB_TOKEN ${TOKEN}
ENV  GITHUB_USERNAME ${USERNAME}
ENV GITHUB_PROJECT_URL https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/mehrab-alam/dacusaurus-project.git
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN apt-get update
RUN apt-get install curl -y
RUN curl -s https// deb.nodesource.com/setup_18.x | bash
RUN apt-get install -y nodejs 
RUN apt-get install git -y
RUN git clone $GITHUB_PROJECT_URL 
RUN npm install -g npm@9.6.7
RUN npm install
EXPOSE 3000
CMD [ "npm","run","dev" ]

