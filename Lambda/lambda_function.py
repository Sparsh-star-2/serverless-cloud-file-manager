import json
import boto3
import base64
import urllib.parse

s3 = boto3.client('s3')

BUCKET_NAME = 'serverless-file-manager-sparsh-654549798259-ap-southeast-2-an'


def response(status_code, body):
    return {
        'statusCode': status_code,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS'
        },
        'body': json.dumps(body)
    }


def lambda_handler(event, context):

    method = event.get('httpMethod', '')
    path = event.get('path', '')

    print(f'Request received: {method} {path}')

    # -----------------------------------------
    # CORS preflight
    # -----------------------------------------
    if method == 'OPTIONS':
        return response(200, {
            'message': 'CORS preflight successful'
        })

    # -----------------------------------------
    # GET /files
    # List files
    # -----------------------------------------
    if method == 'GET' and path == '/files':

        try:
            result = s3.list_objects_v2(
                Bucket=BUCKET_NAME
            )

            files = []

            for obj in result.get('Contents', []):
                files.append({
                    'filename': obj['Key'],
                    'size': obj['Size'],
                    'lastModified': obj['LastModified'].isoformat()
                })

            return response(200, {
                'files': files
            })

        except Exception as e:
            print(f'List error: {str(e)}')

            return response(500, {
                'message': 'Failed to list files'
            })

    # -----------------------------------------
    # POST /files
    # Upload file
    # -----------------------------------------
    if method == 'POST' and path == '/files':

        try:
            body = json.loads(event.get('body') or '{}')

            filename = body.get('filename')
            content = body.get('content')
            is_base64 = body.get('isBase64', False)

            if not filename or content is None:
                return response(400, {
                    'message': 'filename and content are required'
                })

            # Prevent directory traversal
            filename = filename.strip().replace('\\', '/')

            if filename.startswith('/') or '..' in filename.split('/'):
                return response(400, {
                    'message': 'Invalid filename'
                })

            # Convert content into bytes
            if is_base64:
                try:
                    file_data = base64.b64decode(content)
                except Exception:
                    return response(400, {
                        'message': 'Invalid Base64 content'
                    })
            else:
                file_data = content.encode('utf-8')

            s3.put_object(
                Bucket=BUCKET_NAME,
                Key=filename,
                Body=file_data
            )

            print(f'File uploaded: {filename}')

            return response(201, {
                'message': 'File uploaded successfully',
                'filename': filename,
                'size': len(file_data)
            })

        except Exception as e:
            print(f'Upload error: {str(e)}')

            return response(500, {
                'message': 'Failed to upload file'
            })

    # -----------------------------------------
    # GET /files/{filename}
    # Generate download URL
    # -----------------------------------------
    if method == 'GET' and path.startswith('/files/'):

        try:
            path_parameters = event.get('pathParameters') or {}
            filename = path_parameters.get('filename')

            if not filename:
                return response(400, {
                    'message': 'Filename is required'
                })

            filename = urllib.parse.unquote(filename)

            # Verify that the object exists
            s3.head_object(
                Bucket=BUCKET_NAME,
                Key=filename
            )

            # Generate temporary download URL
            download_url = s3.generate_presigned_url(
                'get_object',
                Params={
                    'Bucket': BUCKET_NAME,
                    'Key': filename
                },
                ExpiresIn=300
            )

            print(f'Download URL generated: {filename}')

            return response(200, {
                'message': 'Download URL generated',
                'filename': filename,
                'downloadUrl': download_url,
                'expiresIn': 300
            })

        except s3.exceptions.ClientError as e:

            error_code = e.response.get('Error', {}).get('Code')

            if error_code in ['404', 'NoSuchKey', 'NotFound']:
                return response(404, {
                    'message': 'File not found'
                })

            print(f'Download error: {str(e)}')

            return response(500, {
                'message': 'Failed to generate download URL'
            })

        except Exception as e:
            print(f'Download error: {str(e)}')

            return response(500, {
                'message': 'Failed to generate download URL'
            })

    # -----------------------------------------
    # DELETE /files/{filename}
    # Delete file
    # -----------------------------------------
    if method == 'DELETE' and path.startswith('/files/'):

        try:
            path_parameters = event.get('pathParameters') or {}
            filename = path_parameters.get('filename')

            if not filename:
                return response(400, {
                    'message': 'Filename is required'
                })

            filename = urllib.parse.unquote(filename)

            # Check that file exists
            s3.head_object(
                Bucket=BUCKET_NAME,
                Key=filename
            )

            # Delete file
            s3.delete_object(
                Bucket=BUCKET_NAME,
                Key=filename
            )

            print(f'File deleted: {filename}')

            return response(200, {
                'message': 'File deleted successfully',
                'filename': filename
            })

        except s3.exceptions.ClientError as e:

            error_code = e.response.get('Error', {}).get('Code')

            if error_code in ['404', 'NoSuchKey', 'NotFound']:
                return response(404, {
                    'message': 'File not found'
                })

            print(f'Delete error: {str(e)}')

            return response(500, {
                'message': 'Failed to delete file'
            })

        except Exception as e:
            print(f'Delete error: {str(e)}')

            return response(500, {
                'message': 'Failed to delete file'
            })

    # -----------------------------------------
    # Unknown route
    # -----------------------------------------
    return response(404, {
        'message': 'Route not found'
    })
