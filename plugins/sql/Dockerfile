FROM fusuf/whatsasena:latest

RUN git clone https://github.com/MIDU-SER/Minnutty /root/Minnu
WORKDIR /root/Minnu/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/MIDU-SER/minnu-media

CMD ["node", "bot.js"]
