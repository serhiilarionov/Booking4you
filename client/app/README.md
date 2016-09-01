To install npm packeges just run

```
npm install
```

Then you should have bower and gulp packages installed globally

```
npm install -g bower gulp
```

Next step is to install vendor libraries

```
bower install
```

Before start developing we should install npm packages for server and build loopback sdk from the root directory of project

```
cd ../../
npm install
npm run build:ng2sdk
```

Now environment is ready and we can start API server

```
npm start
```

You may see API methods on `http://localhost:3000/explorer`.
And then start server for client app

```
cd client/app/
npm start
```

Now you can enjoy developing and see app on `http://localhost:8000`.
