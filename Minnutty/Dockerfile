FROM MIDU-SER/Minnutty:beta

RUN git clone https://github.com/MIDU-SER/Minnutty /root/Minnu
WORKDIR /root/Minnu/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/MIDU-SER/media

CMD ["node", "bot.js"]
