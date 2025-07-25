---
sidebar_position: 3
---
# Video API Reference

## Introduction
This API reference describes the RESTful, streaming, and realtime APIs you can use to interact with the GMI Inference Engine. REST APIs are usable via HTTP in any environment that supports HTTP requests.

## Authentication
The GMI API uses API keys for authentication. Create, manage, and learn more about API keys in your organization settings.

**Important Security Notes:**
- API keys should be provided via HTTP Bearer authentication:
  ```http
  Authorization: Bearer GMI_API_KEY
  ```
- Never expose API keys in client-side code
- Load keys from environment variables or key management services
- For multi-organization access, specify headers:
  ```bash
  # Set API key as an environment variable
  export GMI_API_KEY=<your-api-key>
  export GMI_ORG_ID=<your-org-id>
  # Call API
  curl https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/models \
    -H "Authorization: Bearer $GMI_API_KEY" \
    -H "X-Organization-ID: $GMI_ORG_ID"
  ```

## List Video Models
`GET https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/models`

Lists available models by `model_id`.

### Example Request
```bash
curl https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/models \
  -H "Authorization: Bearer $GMI_API_KEY"
```

### Response
```json
{
  "model_ids": [
    "Kling-Image2Video-V2.1-Master",
    "Kling-Text2Video-V2.1-Master",
    "Luma-Ray2",
    "Veo3",
    "Veo3-Fast",
    // ... other models ...
  ]
}
```

## Show Model Details
`GET https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/models/{model-id}`

Retrieves details for `{model_id}`. Use this to get full details of the model's schema and parameters.

### Example Request
```bash
curl https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/models/Veo3 \
  -H "Authorization: Bearer $GMI_API_KEY"
```

### Response
```json
{
  "model": "Veo3",
  "org_id": "google",
  "brief_description": "Google Veo 3 - State-of-the-art video generation model that creates high-quality videos from text prompts and images.",
  "detailed_description": "# Veo3 API Usage Guide\n\n## Overview\n\n**Veo3** is Google's most advanced video generation model, capable of creating stunning, realistic videos from text descriptions and optional reference images...",
  "modalities": {
    <dict>
  },
  "parameters": [
    {
      "name": "prompt",
      "display_name": "Text Prompt",
      "description": "The text prompt used to guide video generation.",
      "type": "string",
      "required": true,
    },
    // other parameters
  ]
  // other details
}

```

## Create Requests 
`POST https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/requests`

The service API handles the full request/response cycle. It accepts the job, publishes status information, and publishes a link to the resulting artifact once processing completes. Clients can enqueue jobs and retrieve details and status. At the end of a successful job, the client can find the artifact details in the final status report.


### Example Request

All jobs are processed asyncronously. A successful request will be accepted and enqueued. The server will respond with request details.

```bash
# Send a request to enqueue a video job. Capture the details to the variable response.
response=$(curl --request POST \
  --url "https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/requests" \
  --header "Authorization: Bearer $GMI_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
  "model": "Veo3",
  "payload": {
    "prompt": "A majestic eagle soaring through a mountain landscape at sunset",
    "durationSeconds": "8",
    "aspectRatio": "16:9",
    "negativePrompt": "blurry, low quality, distorted",
    "personGeneration": "allow_adult",
    "seed": null
  }
}')
```

### Response

```bash
echo $response | jq .
{
  "request_id": "5a7a5466-7948-47d8-8578-cff4b9581feb",
  "model": "Veo3",
  "status": "dispatched",
  "created_at": 1753427199,
  "updated_at": 1753427199,
  "queued_at": 1753427199
}
```

---

## Observe Requests
`GET https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/requests/$REQUEST_ID`

Clients should use the Requests API to find out when a job is complete and retrieve artifact details. The `status` field indicates if the job is dispatched, processing, finished, or other condition.

### Example Request

```bash
# Get request_id
REQUEST_ID=$(echo $response | jq -r .request_id)
# Send request
curl --request GET \
  --url https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/requests/$REQUEST_ID \
  --header "Authorization: Bearer $GMI_API_KEY"
```

### Response

```json
{
  "request_id": "6fb2b474-fb3a-480f-a142-f200537c6de4",
  "org_id": "63729242-1870-4ff4-80b0-d485980ae31c",
  "model": "Veo3",
  "status": "processing",
  "is_public": false,
  "payload": {
    "aspectRatio": "16:9",
    "durationSeconds": "8",
    "negativePrompt": "blurry, low quality, distorted",
    "personGeneration": "allow_adult",
    "prompt": "A majestic eagle soaring through a mountain landscape at sunset",
    "seed": null
  },
  "outcome": null,
  "created_at": 1753468514,
  "updated_at": 1753468514,
  "queued_at": 1753468514
```

### Monitor a Request

This script will poll the job queue and block until the job is complete.

```bash
until [ ${video_gen_status:-"Initializing"} == "success" ]
do 
  video_gen_status=$(curl --silent --request GET \
  --url https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/requests/$REQUEST_ID \
  --header "Authorization: Bearer $GMI_API_KEY" | jq --raw-output .status)
  echo $video_gen_status
  sleep 1
done
unset video_gen_status
```

### Fetch the completed artifacts

A successful job will create a `dict` of output artifacts. Follow the links to retrieve result files.

### Example Request
```bash
curl --request GET --silent --url https://console.gmicloud.ai/api/v1/ie/requestqueue/apikey/requests/$REQUEST_ID \
  --header "Authorization: Bearer $GMI_API_KEY" | jq .outcome
```

### Response

```json
{
  "thumbnail_image_url": "https://storage.googleapis.com/gmi-video-assests-prod/user-assests/63729242-1870-4ff4-80b0-d485980ae31c/15809070173546291047/sample_0.mp4",
  "video_url": "https://storage.googleapis.com/gmi-video-assests-prod/user-assests/63729242-1870-4ff4-80b0-d485980ae31c/15809070173546291047/sample_0.mp4"
}
```

---

## File Handling

Some endpoints accept **file URLs** or **Base64 data URIs**.

| Method        | Notes                                                                                                 |
|---------------|--------------------------------------------------------------------------------------------------------|
| **Data URI**  | Convenient for small files. Large payloads may slow requests.                                          |
| **Hosted URL**| Must be publicly accessible; some hosts block cross-site or rate-limit.                                |
| **Upload API**| GMI provides an upload endpoint returning a URL you can reuse in requests. *(Not available in all SDKs)*|

Check each model's discription for details.

---

