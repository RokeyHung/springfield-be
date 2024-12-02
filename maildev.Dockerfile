FROM node:20.9.0

RUN npm i -g maildev@2.0.5

CMD maildev
