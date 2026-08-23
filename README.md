
# 🚀 Serverless Cloud File Manager

A serverless cloud-based file management application built using **AWS Lambda, API Gateway, Amazon S3, IAM, and CloudWatch**.

The application provides a web-based interface for managing files stored in Amazon S3, allowing users to **upload, view, download, and delete files** without requiring a traditional backend server.

This project demonstrates the use of a **serverless AWS architecture** and the transition from traditional EC2-based infrastructure to managed cloud services.

---

## 📌 Project Overview

The objective of this project was to build a lightweight and practical cloud file management system using AWS serverless services.

Instead of running a continuously active backend server, the application uses **API Gateway and AWS Lambda** to process requests and **Amazon S3** to store files.

### Supported Operations

- 📤 Upload files to Amazon S3
- 📋 List stored files
- 📥 Download files
- 🗑️ Delete files
- 🌐 Manage files through a web interface
- 🔐 Use IAM permissions for AWS service access
- 📊 Monitor backend execution using CloudWatch

---

## 🏗️ Architecture

```text
                         👤 USER
                            │
                            ▼
                 ┌────────────────────┐
                 │      Frontend      │
                 │    HTML / CSS / JS │
                 └─────────┬──────────┘
                           │
                           │ HTTP Requests
                           ▼
                 ┌────────────────────┐
                 │    API Gateway     │
                 │      REST API      │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │       Lambda       │
                 │   Python Backend   │
                 └─────────┬──────────┘
                           │
                           │ AWS SDK
                           ▼
                 ┌────────────────────┐
                 │    Amazon S3       │
                 │   File Storage     │
                 └────────────────────┘

                 ┌────────────────────┐
                 │       IAM          │
                 │  Access Control    │
                 └────────────────────┘

                 ┌────────────────────┐
                 │    CloudWatch      │
                 │  Logs & Monitoring │
                 └────────────────────┘
````

---

## ☁️ AWS Services Used

| AWS Service            | Purpose                                 |
| ---------------------- | --------------------------------------- |
| **AWS Lambda**         | Serverless backend processing           |
| **Amazon API Gateway** | REST API endpoint for frontend requests |
| **Amazon S3**          | Cloud-based file storage                |
| **AWS IAM**            | Permissions and access control          |
| **Amazon CloudWatch**  | Lambda logs and monitoring              |

---

## ⚙️ How It Works

The application follows a simple request-based serverless architecture.

### 1. User Interaction

The user interacts with the web interface using a browser.

The frontend provides controls for:

```text
Upload
List Files
Download
Delete
```

### 2. API Request

When a user performs an operation, the frontend sends an HTTP request to **API Gateway**.

Example:

```text
Frontend
   │
   ▼
POST /upload
```

### 3. Lambda Processing

API Gateway invokes the Lambda function.

Lambda processes the request using Python and communicates with Amazon S3.

```text
API Gateway
     │
     ▼
Lambda
     │
     ▼
Amazon S3
```

### 4. File Storage

Files are stored as objects inside an Amazon S3 bucket.

Example:

```text
S3 Bucket
│
├── document.pdf
├── image.png
├── resume.pdf
└── project.zip
```

### 5. Response

Lambda returns the result to API Gateway, which sends the response back to the frontend.

```text
S3
 │
 ▼
Lambda
 │
 ▼
API Gateway
 │
 ▼
Frontend
```

---

## 🔌 API Operations

The backend provides API operations for file management.

| Operation | Purpose           |
| --------- | ----------------- |
| `POST`    | Upload a file     |
| `GET`     | List stored files |
| `GET`     | Download a file   |
| `DELETE`  | Delete a file     |

The frontend communicates with these API endpoints to perform file operations.

---

## 🔐 Security & Permissions

AWS IAM is used to control what the Lambda function can access.

The Lambda execution role provides the required permissions to interact with the S3 bucket.

The application follows the principle of **least privilege** by granting only the permissions required for the application's operations.

No AWS access keys are embedded directly into the application code.

---

## 📊 Monitoring

Amazon CloudWatch is used to monitor the Lambda backend.

CloudWatch provides:

* Lambda execution logs
* Error information
* Invocation monitoring
* Troubleshooting information

This makes it possible to identify problems when API requests or file operations fail.

---

## 🧰 Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* AWS Lambda
* AWS SDK (`boto3`)

### Cloud Services

* Amazon S3
* Amazon API Gateway
* AWS IAM
* Amazon CloudWatch

### Development

* Git
* GitHub

---

## 📁 Project Structure

```text
serverless-cloud-file-manager/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── lambda/
│   └── lambda_function.py
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

## 🧪 Project Testing

The application was tested by performing the following operations:

### Upload

```text
Frontend
   ↓
API Gateway
   ↓
Lambda
   ↓
S3
```

Verified that files were successfully stored in the S3 bucket.

### List

Verified that files stored in S3 were retrieved and displayed in the frontend.

### Download

Verified that stored files could be downloaded through the application.

### Delete

Verified that selected files could be removed from the S3 bucket.

### Backend Monitoring

Lambda execution logs were verified using CloudWatch.

---

## 📸 Screenshots

Screenshots demonstrating the implementation are available in the `screenshots/` directory.

screenshots include:

Application interface
File successfully uploaded
S3 bucket containing uploaded files
Lambda function configuration
API Gateway configuration
IAM execution role
CloudWatch Lambda logs

---

## 🎯 Key Learning Outcomes

Through this project, I gained hands-on experience with:

* Building a serverless AWS application
* AWS Lambda function development
* Creating REST APIs using API Gateway
* Amazon S3 object storage
* Connecting Lambda with S3 using `boto3`
* IAM roles and permissions
* CloudWatch logging
* REST API request/response flow
* Frontend-to-cloud communication
* Serverless architecture
* Git and GitHub project management

---

## 🚀 Project Outcome

This project demonstrates how a traditional server-based file management application can be implemented using AWS serverless services.

Instead of maintaining a continuously running backend server, the application uses:

```text
API Gateway
     ↓
Lambda
     ↓
S3
```

This provides a simple architecture where AWS manages the underlying compute and storage infrastructure.

The project also provided practical experience in **serverless application development, cloud storage, API integration, IAM permissions, and application monitoring**.

---

## 🔮 Future Improvements

Possible future enhancements include:

* 🔐 User authentication with Amazon Cognito
* 📁 Folder-based file organization
* 🔎 File search and filtering
* 📊 File size and storage statistics
* 🔗 Pre-signed S3 URLs
* 🌐 CloudFront integration
* 📈 Advanced CloudWatch monitoring
* 🛡️ More granular IAM permissions
* 📱 Improved responsive design

---

## 👨‍💻 Author

**Sparsh Jambhulkar**

AWS | Cloud | DevOps | Python

---

⭐ If you find this project useful, feel free to explore the repository and the implementation.


