# Album App

An application to browse and view albums. The app fetches album data from the iTunes API and displays a list of albums along with their thumbnails. You can view the album details and the app also supports offline functionality to display album data even without a network connection.

## Features

- Display a list of albums with thumbnails fetched from the iTunes API.
- View detailed information about each album.
- Offline support – the album list and details remain available even when the app is not connected to the internet.
- Navigate seamlessly between the home screen (album list) and the album details screen.

## Tech Stack

- **React Native**: The core framework for building the app.
- **React Navigation**: For navigating between screens.
- **React Hooks**: For managing component states and lifecycle.
- **AsyncStorage**: To store album data offline.
- **Axios**: For API requests to the iTunes API.
- **Jest/React Testing Library**: For unit and integration testing.

## Installation

To get started with the Album app, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/album-app.git
    cd album-app
    ```

2. **Install dependencies**:

    Make sure you have **Node.js** and **npm** installed. Then, run the following command to install the dependencies:

    ```bash
    npm install
    ```

3. **Start the app**:

    For **iOS**:

    ```bash
    npx react-native run-ios
    ```

    For **Android**:

    ```bash
    npx react-native run-android
    ```

4. **Start Metro bundler**:

    If Metro bundler isn't running automatically, you can start it manually with:

    ```bash
    npx react-native start
    ```

## Screens

- **Home Screen**: Displays a list of albums, fetched from the iTunes API, with a thumbnail image and album title.
- **Album Details Screen**: Displays more information about a selected album, such as artist name, release date, and track list.

## Screenshots

### Home Screen
![Home Screen](assets/home-screen.png)

### Album Details
![Album Details](assets/album-screen.png)

## Offline Mode

The app supports offline functionality using **AsyncStorage**. The list of albums and their details are cached locally, so you can access the album data even without an internet connection.

- The app will first check for network availability.
- If there is no internet connection, the app will display the cached album data.
- If an internet connection is available, the app will fetch fresh data from the iTunes API.

## Testing

The app uses **Jest** and **React Testing Library** for unit and integration testing. To run the tests, use the following command:

```bash
npm run test
