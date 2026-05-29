FROM  node:20-alpine

WORKDIR  /app

COPY   package*.json    ./

RUN   npm install

COPY  . . 

EXPOSE 3000

#CMD ["node","app.js"]

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
CMD wget --spider -q http://localhost:3000/health || exit 1

CMD ["npm" , "start"]    