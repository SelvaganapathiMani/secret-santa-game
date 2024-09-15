# Secret Santa Application

## Overview

This application allows users to upload CSV files containing employee details and previous Secret Santa assignments. It then generates new Secret Santa assignments while ensuring that employees do not pick themselves or the same person as the previous year. The results are available for download in CSV format.

The project uses Vue.js for the frontend and Node.js for the backend, and follows Test-Driven Development (TDD) principles.

### Result
1. **Home Page Image**
 ![Home Page](https://raw.githubusercontent.com/SelvaganapathiMani/secret-santa-game/main/output_images/home_page.png)

2. **Input image**
 ![Input Image](https://raw.githubusercontent.com/SelvaganapathiMani/secret-santa-game/main/output_images/input_result_image.png)
3. **Result Image**
 ![Result Image](https://raw.githubusercontent.com/SelvaganapathiMani/secret-santa-game/main/output_images/final_image.png)
4. **Validation Image**
 ![Validation Image](https://raw.githubusercontent.com/SelvaganapathiMani/secret-santa-game/main/output_images/validation_image.png)

## Features

- Upload CSV files for employees and previous Secret Santa assignments.
- Validate file types and handle errors.
- Generate new Secret Santa assignments.
- Download the result as a CSV file.
- Display error messages if any issues arise.

## Tech Stack

- **Frontend:** Vue.js
- **Backend:** Node.js with Express
- **Testing:** Mocha and Chai (for backend), Vue Test Utils (for frontend)
- **Other Libraries:** Axios for HTTP requests

## Setup

### Prerequisites

- Node.js and npm installed on your machine.
- Vue CLI for the frontend setup.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/secret-santa-app.git
   cd secret-santa-app

2. **Install Dependencies**

    ```bash
    cd secret-santa-ui
    npm install
    ``` 

    ```bash
    cd ../backend
    npm install
    ````
### Configuration

#### Frontend Configuration

- Navigate to the `secret-santa-ui` directory.
- Ensure the API URL in the Vue component matches your backend URL.

#### Backend Configuration

- Navigate to the `backend` directory.
- Update the backend configuration as needed (e.g., database settings).

### Running the Application

### Start the Backend Server

  ```bash
  cd backend
  npm start
  ```

The backend server will be running on http://localhost:3000.

### Start the Frontend Development Server

  ``` bash
  cd secret-santa-ui
  npm run serve
  ```

The frontend will be running on http://localhost:8080.

### Usage

- Navigate to the frontend application in your browser.
- Upload the CSV files for employees and previous assignments.
- Click "Submit" to generate new Secret Santa assignments.
- Download the resulting CSV file with new assignments.


### Running Tests
1. **Frontend Tests**
    ```bash
    cd secret-santa-ui
    npm run test:unit
    ```
2. **Backend Tests**
    ```bash
    cd backend
    npm test
    ```


### Explanation

- **Configuration**: Instructions for setting up both the frontend and backend.
- **Running the Application**: Commands to start the backend and frontend servers, including the URLs where they will be running.
- **Usage**: Instructions for using the application.
- **Running Tests**: Commands for running frontend and backend tests.
- **Contact**: `mselvaganapathi257@gmail.com`


