

# Meme Generator

A simple react app which allows user to generate Memes. 
The data is fetched from an API called https://api.imgflip.com/get_memes

This Meme Generator allows user to input text on the image as well.

Deployed using netlify which can be visited over here:
https://meme-generator-v2.netlify.app/

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/[your-username]/meme-fetcher.git
cd meme-fetcher
npm install
```

Next, create a .env file at the root of the project and include your Imgflip API key. You can obtain an API key by creating an account on the Imgflip website and requesting an API key.


```
IMGFLIP_API_KEY=YOUR_API_KEY
```
## Usage

To start the development server, run:

```
npm start
```
The app will be available at http://localhost:3000.

To build the production version of the app, run:

```
npm run build
```
## Features

- Random Meme images generated
- Users can write captions on it

## Future Plans

- Allow users to save and download the image

## Credits

- [React.js](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
