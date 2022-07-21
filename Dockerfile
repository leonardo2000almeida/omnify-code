FROM node:slim
ENV HOME=/usr/app
WORKDIR /usr/app
COPY . .
RUN yarn

FROM node:slim
COPY --from=0 /usr/app /usr/app
WORKDIR /usr/app
EXPOSE 3000
CMD yarn start
