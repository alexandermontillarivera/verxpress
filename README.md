# Verxpress
Create your express server with a simple file that this module will generate for you in a matter of seconds ⏳.

## Instalation

If you want to install it globally 🌐.
```console
npm install -g verxpress
```

## Usage

Run the cli with the following command 💻.
```console
verxpress
```

Or Usage module for npx 🎽.
```console
npx verxpress
```

In the console it will launch a question to know the name of the main file of the express app 🈸.

![Console question](https://res.cloudinary.com/alexandermontillarivera/image/upload/v1654818453/screenshot_o7thai.png)

By default this is index.js if you give it enter, but it can be the name you want 📛.

This generates a vercel.json file at the root of the project, which will be used by the vercel platform to deploy the app 🚀.

From here, simply enter the vercel platform and upload the project, it will detect the vercel.json and configure that part to support express. Follow the steps and requirements of the platform and voila, you have it 🎉.

## **Important 👀**

Your main file must be in the root of the project because vercel requests it in this section 📚.

## More information to work with express and vercel 📃

  * [Vercel documentation](https://vercel.com/guides/using-express-with-vercel)
  * [Reference from which the module came from](https://dev.to/hte305/deploy-express-js-app-to-vercel-38jb)