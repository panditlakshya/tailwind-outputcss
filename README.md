# Tailwind Class Generator Script
This repository contains a script that generates a minimal Tailwind CSS file, containing only the styles that are used in a given HTML file.
This can significantly reduce the size of the final CSS file, making your project faster and more efficient.

## Features
- Purges unused CSS styles from Tailwind CSS based on a given HTML file.
- Generates a minimized CSS output that contains only the required Tailwind classes.
- Simple and easy-to-use setup.

## Prerequisites
Before running the script, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation
1. Clone this repository:

   ```bash
   git clone https://github.com/panditlakshya/tailwind-outputcss.git
   cd tailwind-outputcss
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
   Or if you're using yarn:
   ```
   yarn install
   ```
3. Install Tailwind CSS:
   ```
   npm install tailwindcss
   ```
   Or:
   ```
   yarn add tailwindcss
   ```

   
## Usage
1. Prepare your tailwind.config.js file if you don't already have one:
   ```bash
   npx tailwindcss init
   ```

2. Update your tailwind.config.js file to specify the content paths to your HTML files:
   ```
   module.exports = {
     content: [
       './path-to-your-html/**/*.html',
       './other-path/**/*.js',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```
3. Run the command to generate the required Tailwind CSS file:
   ```bash
   yarn run build-css
   ```
   This will generate an output.css file that contains only the necessary Tailwind CSS styles based on the classes used in your HTML files.

4. Include the generated output.css file in your HTML:

   ```
   <link href="output.css" rel="stylesheet">
   ```

## Customization
 - You can modify the paths in tailwind.config.js to include more or fewer HTML files as needed.
 - If you want to include additional styles or customizations, you can add them to your input.css file.
 - If you are dynamically adding css class to a html file, then you can add those classes in tailwind.config.js file as,
   ```
   module.exports = {
     content: [
       './path-to-your-html/**/*.html',
       './other-path/**/*.js',
     ],
     theme: {
       extend: {},
     },
     safelist: [
      "bg-gray-200",
      "text-right",
      "bg-blue-100",
      "rounded",
      "mb-2",
      "p-2",
      "hidden",
      // Add any other classes you're using dynamically
     ],
     plugins: [],
   }
   ```
   
     
   
