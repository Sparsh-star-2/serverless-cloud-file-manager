# Serverless Cloud File Manager

**Serverless Cloud File Manager** is a serverless web-based file management application built using **AWS Lambda, Amazon API Gateway, Amazon S3, IAM, and CloudWatch**.

The application provides a web interface for managing files stored in Amazon S3, allowing users to **upload, list, download, and delete files** without requiring a continuously running backend server.

The project demonstrates a practical **serverless AWS architecture**, where managed AWS services handle API requests, backend processing, file storage, permissions, and monitoring.

---

## 📌 Project Overview

The project was built to demonstrate how a lightweight file management application can be implemented using AWS serverless services instead of traditional EC2-based backend infrastructure.

The application uses **Amazon API Gateway** to expose REST API endpoints, **AWS Lambda** to process requests, and **Amazon S3** to store files.

### 👤 User / File Management Interface

Users can:

* Access the file management interface through a web browser
* Upload files
* View stored files
* Download files
* Delete files
* Manage files stored in Amazon S3

### ⚙️ Backend Processing

The serverless backend:

* Receives API requests through API Gateway
* Invokes the Lambda function
* Processes file operations using Python
* Communicates with Amazon S3 using `boto3`
* Returns responses to the frontend

---

# 🏗️ Architecture

```text
                         ┌──────────────────────────┐
                         │         End User         │
                         │     Browser / Client     │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │        Frontend          │
                         │     HTML / CSS / JS      │
                         └────────────┬─────────────┘
                                      │
                                      │ HTTP Requests
                                      ▼
                         ┌──────────────────────────┐
                         │     Amazon API Gateway   │
                         │         REST API         │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │       AWS Lambda         │
                         │     Python / boto3       │
                         └────────────┬─────────────┘
                                      │
                                      │ AWS SDK
                                      ▼
                         ┌──────────────────────────┐
                         │       Amazon S3          │
                         │       File Storage       │
                         └──────────────────────────┘


                         ┌──────────────────────────┐
                         │        AWS IAM           │
                         │   Access & Permissions   │
                         └──────────────────────────┘

                         ┌──────────────────────────┐
                         │     Amazon CloudWatch    │
                         │    Logs & Monitoring     │
                         └──────────────────────────┘
```

### Serverless Request Flow

```text
User
 │
 ▼
Frontend
 │
 │ HTTP Request
 ▼
API Gateway
 │
 ▼
Lambda
 │
 │ boto3
 ▼
Amazon S3
 │
 ▼
Lambda Response
 │
 ▼
API Gateway
 │
 ▼
Frontend
```

---

# ☁️ AWS Infrastructure

The project uses the following AWS services:

| AWS Service            | Purpose                                             |
| ---------------------- | --------------------------------------------------- |
| **AWS Lambda**         | Executes the serverless backend logic               |
| **Amazon API Gateway** | Provides REST API endpoints for file operations     |
| **Amazon S3**          | Stores uploaded files as objects                    |
| **AWS IAM**            | Controls Lambda permissions and AWS resource access |
| **Amazon CloudWatch**  | Provides Lambda logs and monitoring                 |

The architecture does not require a continuously running EC2 backend server for request processing.

---

# 🛠️ Technology Stack

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Python
* AWS Lambda
* AWS SDK for Python (`boto3`)

## Cloud & Infrastructure

* Amazon S3
* Amazon API Gateway
* AWS IAM
* Amazon CloudWatch

## Development

* Git
* GitHub

---

# ✨ Key Features

## 📁 File Management

The application supports the following file operations:

* Upload files
* List stored files
* Download files
* Delete files

The files are stored as objects inside an Amazon S3 bucket.

Example:

```text
S3 Bucket
│
├── document.pdf
├── image.png
├── resume.pdf
└── project.zip
```

---

# 📤 File Upload

Users can upload files through the web interface.

The request follows this flow:

```text
User
  │
  ▼
Upload File
  │
  ▼
Frontend
  │
  ▼
POST Request
  │
  ▼
API Gateway
  │
  ▼
Lambda
  │
  ▼
Amazon S3
```

Lambda processes the request using Python and `boto3`, and the uploaded file is stored in Amazon S3.

---

# 📋 File Listing

The frontend can request the files stored in the S3 bucket.

```text
Frontend
   │
   ▼
API Gateway
   │
   ▼
Lambda
   │
   ▼
Amazon S3
   │
   ▼
Stored Files
   │
   ▼
Frontend
```

The retrieved files are displayed through the web interface.

---

# 📥 File Download

Users can download files stored in Amazon S3 through the application.

The request is processed through the serverless backend before the file is returned to the user.

```text
User
 │
 ▼
Frontend
 │
 ▼
API Gateway
 │
 ▼
Lambda
 │
 ▼
Amazon S3
 │
 ▼
File Response
```

---

# 🗑️ File Deletion

Users can delete selected files through the web interface.

```text
Frontend
   │
   ▼
DELETE Request
   │
   ▼
API Gateway
   │
   ▼
Lambda
   │
   ▼
Amazon S3
```

Lambda performs the required S3 operation using its assigned IAM permissions.

---

# 🔌 REST API

The backend provides API operations for file management.

| HTTP Method | Operation | Purpose                |
| ----------- | --------- | ---------------------- |
| `POST`      | Upload    | Upload a file to S3    |
| `GET`       | List      | Retrieve stored files  |
| `GET`       | Download  | Retrieve a stored file |
| `DELETE`    | Delete    | Remove a file from S3  |

The frontend communicates with these API endpoints through Amazon API Gateway.

---

# 🔐 Security & Permissions

AWS IAM is used to control access between the Lambda function and Amazon S3.

The Lambda execution role provides the permissions required for the application's file-management operations.

The project follows the principle of **least privilege**, granting only the permissions required by the Lambda function.

AWS credentials are not embedded directly into the application code.

The serverless architecture also avoids exposing an EC2 server directly to the internet because backend processing is handled through API Gateway and Lambda.

---

# 📊 Monitoring

Amazon CloudWatch is used to monitor the Lambda backend.

CloudWatch provides visibility into:

* Lambda execution logs
* Function invocations
* Runtime errors
* Troubleshooting information

The logs can be used to investigate failures during API requests and file operations.

---

# 📁 Project Structure

```text
serverless-cloud-file-manager/
│
├── Lambda/
│   └── lambda_function.py
│
├── demo/
│   └── serverless-file-manager-demo.mp4
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── screenshots/
│   ├── application.png
│   ├── s3-bucket.png
│   ├── lambda.png
│   ├── api-gateway.png
│   └── cloudwatch.png
│
└── README.md
```

> The exact project structure may vary depending on the deployment configuration.

---

# 🧪 Testing

The application was tested through the complete serverless request flow.

### Upload Testing

Verified that files could be uploaded through the frontend and successfully stored in Amazon S3.

```text
Frontend
   ↓
API Gateway
   ↓
Lambda
   ↓
S3
```

### List Testing

Verified that files stored in S3 could be retrieved and displayed through the frontend.

### Download Testing

Verified that stored files could be downloaded through the application.

### Delete Testing

Verified that selected files could be deleted from the S3 bucket.

### Backend Testing

Lambda execution logs were verified using Amazon CloudWatch.

---

# 📸 Screenshots

Implementation screenshots are available in the `screenshots/` directory.

The screenshots demonstrate:

* Application interface
* File upload
* Uploaded files in Amazon S3
* Lambda configuration
* API Gateway configuration
* IAM execution role
* CloudWatch Lambda logs

---

# 💻 Local / Frontend Development

The frontend consists of standard web technologies:

```text
HTML5
CSS3
JavaScript
```

The frontend communicates with the deployed API Gateway endpoint for file-management operations.

The Lambda backend runs in AWS and is invoked through API Gateway when requests are made from the application.

---

# ☁️ Serverless Deployment

The deployed application follows this architecture:

```text
Web Frontend
     │
     ▼
Amazon API Gateway
     │
     ▼
AWS Lambda
     │
     ▼
Amazon S3
```

Supporting services:

```text
AWS IAM
     │
     └── Lambda permissions

Amazon CloudWatch
     │
     └── Lambda logs & monitoring
```

This removes the need for a continuously running EC2 backend server.

---

# 🔄 Application Workflow

The complete application workflow is:

```text
User
 │
 ▼
Web Interface
 │
 ▼
HTTP Request
 │
 ▼
API Gateway
 │
 ▼
AWS Lambda
 │
 ├──────────────► Amazon S3
 │                    │
 │                    ▼
 │                File Operation
 │
 ▼
Lambda Response
 │
 ▼
API Gateway
 │
 ▼
Frontend
```

---

# 🎯 Learning Objectives

This project was created to gain practical experience with:

* Serverless AWS architecture
* AWS Lambda
* Python Lambda development
* Amazon API Gateway
* REST API design
* Amazon S3 object storage
* Connecting Lambda with S3 using `boto3`
* IAM roles and permissions
* CloudWatch logging
* Frontend-to-cloud communication
* HTTP request/response flow
* Serverless application development
* Git and GitHub

---

# 🚀 Project Outcome

This project demonstrates how a file-management application can be implemented using AWS managed and serverless services instead of a traditional continuously running backend server.

The core architecture is:

```text
API Gateway
      ↓
Lambda
      ↓
S3
```

The project provides hands-on experience with **serverless backend processing, REST API integration, cloud object storage, IAM permissions, and application monitoring**.

---

# 🚧 Future Improvements

Possible future improvements include:

* User authentication
* User-specific file storage
* File type and size validation
* Improved API error handling
* Pre-signed S3 URLs for file downloads
* File metadata management
* Improved frontend validation
* Custom domain configuration
* HTTPS configuration
* Additional CloudWatch monitoring
* More comprehensive automated testing

---

# 📚 Project Purpose

Serverless Cloud File Manager is a portfolio and learning project focused on demonstrating practical experience with **AWS serverless services and cloud-based application architecture**.

The project combines a web frontend with API Gateway, Lambda, S3, IAM, and CloudWatch to demonstrate how a complete cloud application can be built without maintaining a traditional backend server.

---

# 👨‍💻 Author

**Sparsh Jambhulkar**

AWS | Cloud | DevOps | Python

---

# 📄 Project Ownership

This project was independently designed and developed by **Sparsh Jambhulkar** as a personal learning and portfolio project.

The application, source code, architecture, implementation, documentation, and project-specific content were created as part of the development of the Serverless Cloud File Manager.

Third-party frameworks, libraries, and AWS services used by the project remain subject to their respective licenses and terms.
