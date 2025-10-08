## The Project

This is a simple Node.js application that starts a simple http server.

## Prerequisites

- Node.js (v20 or higher)
- Docker (if you want to run in a container)

## Getting Started

### Run Locally

1. Clone the repository

```
git clone git@github.com:Pramod-Kumar-G/KubernetesSubmissions.git
cd the_project
```

2. Install Dependencies

```
npm i
```

3. Create a .env file and define the desired PORT for the server to run on.
4. Start the app

```
npm start
```

You should see output like:

```
Server started in port 3000
```

### Run with Docker

1. Build the Docker image:

```
docker build -t the_project .
```

2. Run the image:

```
docker run the_project
```

### Run on Kubernetes

1. Make sure you have a Kubernetes cluster running.

2. Apply the Deployment manifest:

```bash
kubectl apply -f manifests/deployment.yaml
```

3. Verify the pod is running

```bash
kubectl get pods
```

you should see a pod named `the-project-...` running

4. View logs from the pod:

```bash
kubectl logs -f <pod-name>
```

You should see output like: `Server started in port 3000`

## Exercise 3.9 DBaaS vs DIY
When deploying database for your application there are two options available.
1. DBaaS (Database as a Service): It is a fully managed database solution by google like Gooogle Cloud SQL for postgres.
2. Self Managed Database Container: Deployed on gke using PersistentVolumeClaims as storage.
Both are widely used in production but each have their own set of pros and cons which are mentioned below.

### 1. DBaaS
#### Pros:
- Easy setup and intialization. No need to initialize Statefulsets, PVC's, or storage classes.
- Fully managed by Google. We don't need to worry about patching and upgrades.
- Easily scalable
- Automatic daily Backup's.
- High availability with replication across zones.
  
#### Cons:
- Generally higher in costs.
- Organisations may have reduced control over the underlying infrastructure
- Customers become dependent on the provider for addressing issues and timely updates.

### 2. Self Managed Database Container with PVC:
#### Pros:
- Containers provide consistent and isolated environment so they can be moved between different environments easily making them portable.
- You have full control over the database and can implement any custom solution onto the database.
- Lower costs when you already have the infrastructure for your existing application.
  
#### Cons:
- Requires setup and intialization of Statefulsets, PVC's, ConfigMaps, and Secrets. Initial setup might be time consuming and cumbersome.
- You're responsible for patching and upgrades so leads to constant maintainence and monitoring.
- You are responsible for backing up and restoring.
