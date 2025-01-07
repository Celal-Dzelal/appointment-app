# Appointment-App

- Appointment-App is an application that allows users to make appointments with doctors and view their booked appointments. The page is fully responsive, and by clicking on the doctor cards, users can open modals to book appointments. The booked appointments are displayed at the bottom of the page.

## Demo

![Demo](./public/Demo.gif)

## Technologies Used

**JavaScript** - 61.5%

**SCSS** - 20.8%

**HTML** - 14.6%

**CSS** - 3.1%

**FontAwesome**: Used for icons.

**Google Fonts**: Used for fonts.

**React-Bootstrap**: Used for responsive design components and modals.

## Features

- **Responsive Design**: Fully responsive across different devices and screen sizes.
- **Doctor Cards**: Displays information about each doctor in a card format. Clickable to open modals.
- **Appointment Modal**: Modal pop-up that allows users to book appointments when a doctor card is clicked.
- **Appointment Display**: Once appointments are booked, they are shown at the bottom of the page for easy reference.

## Colors

```
https://color.adobe.com/hospital-color-theme-3a61b895-0621-4978-98a3-599030f213c6/
```

## Installation:

To set up the project locally, follow these steps:

1. **Clone the repository**  
   First, clone the repository to your local machine:

```
https://github.com/Celal-Dzelal/appointment-app.git
```

2. **Navigate to the project folder**  
   After cloning, navigate into the project directory:

```
cd appointment-app
```

3. **Install dependencies**  
   Next, install the required dependencies. If you're using **pnpm**:

```
pnpm install
```

4. **Start the development server**  
   Once the dependencies are installed, start the development server:

- If you're using **pnpm**:
  ```
  pnpm start
  ```
  The application will now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

- **public**: Static files accessible by the browser, including images (`img`) and the main `index.html` file.
  - **img**: Folder containing images used throughout the app (doctor photos, appointment images, etc.).
  - **favicon.ico**: The app’s favicon.
  - **index.html**: The main HTML file that serves as the entry point for the app.
- **src**: Contains all the source code for the React app.
  - **components**: Contains React components for different parts of the app.
    - **Appoinment**: The component for handling appointment-related functionality.
    - **Doctors**: Contains the components to display doctor cards and doctor information.
    - **Header**: Contains the header of the application, including navigation and branding.
  - **helpers**: Contains helper functions and data, like mock data (`data.jsx`).
  - **scss**: SCSS files for styling the app, including variables.
  - **App.js**: The main React component that ties together other components.
  - **index.css**: Global styles for the app.
  - **index.js**: The entry point for React, rendering the `App.js` component.

## License

- This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

- Feel free to fork this repository, make changes, and submit a pull request to contribute to the project.
