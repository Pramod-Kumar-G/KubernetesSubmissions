## Random String Logger (Log Output App)
This is a simple Node.js application that generates a random alphanumeric string and logs it to the console every 5 seconds along with the current timestamp.
The project is containerized with Docker for easy setup and deployment.

## Prerequisites
- Node.js (v20 or higher)
- Docker (if you want to run in a container)

## Getting Started
### Run Locally
1. Clone the repository

```
git clone git@github.com:Pramod-Kumar-G/KubernetesSubmissions.git
cd log-output
```
2. Install Dependencies
```
npm i
```
3. Start the app
```
npm start
```
You should see output like:
```
2025-09-08T05:31:53.035Z Dd7t63I
```

### Run with Docker

1. Build the Docker image:
```
docker build -t log-output .
```
2. Run the image:
```
docker run log-output
```
