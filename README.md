# Containerized this app for CLOUD COMPUTING

## 1. Install and configure docker for the system

## 2. Install and configure kubectl

## 3.install and configure minikube

    minikube start --nodes 2 -p @name of the cluster --driver=docker

    minikube dashboard -p @name of the cluster

## 4. Create a Dockerfile in the project

### Mention all the things to be containerized

### Upload the image to docker hub

## 5. Checking for proper deployment of Cluster

    kubectl get nodes

### and check for 2 nodes

## 6. Creating a deployment

    kubectl create deployment <name> --image=<dockerImage>

### on successful deployment of the image

    kubectl expose deployment <name> --type=NodePort --port=3000

    minikube ip -p <cluster name>

    kubectl get svc

## In the browser

In the search bar enter

1.IP from minikube

2.ip:Portnumber(Containing/TCP)
