FROM archlinux:latest
ENV OWNER = albertbuh
LABEL desc = my first dockerfile :)
RUN pacman -Syy --noconfirm nodejs npm
# RUN pacman -S --noconfirm nodejs npm 

WORKDIR /home
COPY . .

# load npm packages for react server 
RUN npm i --save-dev webpack webpack-cli webpack-dev-server typescript ts-node && \
    npm i react@18 react-dom@18 && \
    npm i --save-dev @types/react @types/react-dom && \
    npm i --save-dev @babel/core @babel/preset-react @babel/preset-env @babel/preset-typescript @babel/plugin-transform-react-jsx babel-loader && \
    npm i --save-dev html-webpack-plugin && \
    npm i --save-dev react-router-dom url-loader file-loader

EXPOSE 3000/tcp

ENTRYPOINT ["npm", "run", "start"]
# CMD npm run start

