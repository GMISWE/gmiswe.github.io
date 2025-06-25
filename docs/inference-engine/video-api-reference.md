---
sidebar_position: 2
---
# Video SDK Reference

## Overview

GMI Cloud Video Generation SDK provides a Python interface for creating, managing, and monitoring video generation requests using state-of-the-art AI models. This SDK allows users to generate videos from text prompts, images, or other inputs through an asynchronous request system.

## Features

- **Text-to-Video Generation**: Create videos from text descriptions
- **Image-to-Video Generation**: Animate static images into videos
- **Asynchronous Processing**: Submit requests and monitor progress
- **Multiple Model Support**: Access various video generation models
- **Request Management**: Track, retrieve, and manage video generation requests
- **Real-time Status Monitoring**: Get real-time updates on request progress

## Installation

To install the SDK, use pip:

```bash
pip install gmicloud
```

## Setup and Authentication

### Prerequisites

Before using the video generation SDK, you must have:
- A GMI Cloud account
- Valid authentication credentials

### Authentication Configuration

There are two ways to configure authentication:

#### Option 1: Environment Variables (Recommended)

Set the following environment variables:

```bash
export GMI_CLOUD_CLIENT_ID="<YOUR_CLIENT_ID>"
export GMI_CLOUD_EMAIL="<YOUR_EMAIL>"
export GMI_CLOUD_PASSWORD="<YOUR_PASSWORD>"
```

#### Option 2: Direct Parameter Passing

Pass credentials directly when initializing the client:

```python
from gmicloud import Client

client = Client(
    client_id="<YOUR_CLIENT_ID>",
    email="<YOUR_EMAIL>",
    password="<YOUR_PASSWORD>"
)
```

## Quick Start

### 1. Initialize the Client

```python
from gmicloud import Client

# Initialize client (uses environment variables by default)
client = Client()
```

### 2. Explore Available Models

```python
# Get all available video generation models
models = client.video_manager.get_models()
print(f"Available models: {[model.model for model in models]}")

# Get detailed information about a specific model
model_detail = client.video_manager.get_model_detail("Wan-AI_Wan2.1-T2V-14B")
print(f"Model details: {model_detail}")
```

### 3. Submit a Video Generation Request

```python
from gmicloud._internal._models import SubmitRequestRequest

# Create a text-to-video request
request = SubmitRequestRequest(
    model="Wan-AI_Wan2.1-T2V-14B",
    payload={
        "prompt": "A dog reading a book in a cozy library",
        "video_length": 5  # Duration in seconds
    }
)

# Submit the request
response = client.video_manager.create_request(request)
print(f"Request submitted with ID: {response.request_id}")
```

### 4. Monitor Request Progress

```python
import time

request_id = response.request_id

# Poll for status updates
while True:
    request_detail = client.video_manager.get_request_detail(request_id)
    print(f"Status: {request_detail.status}")
    
    if request_detail.status == "success":
        print("Video generation completed!")
        print(f"Result: {request_detail.outcome}")
        break
    elif request_detail.status == "failed":
        print("Video generation failed!")
        break
    
    time.sleep(5)  # Wait 5 seconds before checking again
```

## Detailed API Reference

### Client Initialization

```python
class Client:
    def __init__(self, client_id: Optional[str] = "", 
                 email: Optional[str] = "", 
                 password: Optional[str] = ""):
        """
        Initialize the GMI Cloud client.
        
        Args:
            client_id: Your GMI Cloud client ID
            email: Your GMI Cloud email
            password: Your GMI Cloud password
        """
```

### Video Manager Methods

#### Get Available Models

```python
def get_models() -> List[GetModelResponse]:
    """
    Retrieve a list of available video generation models.
    
    Returns:
        List of available models with their details
    """
```

**Example:**
```python
models = client.video_manager.get_models()
for model in models:
    print(f"Model: {model.model}")
    print(f"Description: {model.brief_description}")
    print(f"Type: {model.model_type}")
    print("---")
```

#### Get Model Details

```python
def get_model_detail(model_id: str) -> GetModelResponse:
    """
    Get detailed information about a specific model.
    
    Args:
        model_id: The ID of the model to retrieve
        
    Returns:
        Detailed model information including parameters and pricing
    """
```

**Example:**
```python
model_detail = client.video_manager.get_model_detail("Wan-AI_Wan2.1-T2V-14B")
print(f"Model: {model_detail.model}")
print(f"Description: {model_detail.detailed_description}")
print(f"Parameters: {model_detail.parameters}")
print(f"Pricing: {model_detail.price_info}")
```

#### Submit Video Generation Request

```python
def create_request(request: SubmitRequestRequest) -> SubmitRequestResponse:
    """
    Submit a new video generation request.
    
    Args:
        request: The request object containing model and payload
        
    Returns:
        Response with request ID and initial status
    """
```

**Request Structure:**
```python
class SubmitRequestRequest(BaseModel):
    model: str          # Model ID to use for generation
    payload: dict       # Generation parameters
```

**Example - Text-to-Video:**
```python
request = SubmitRequestRequest(
    model="Wan-AI_Wan2.1-T2V-14B",
    payload={
        "prompt": "A beautiful sunset over mountains",
        "video_length": 5,
        "negative_prompt": "blurry, low quality",
        "cfg_scale": 7.5,
        "seed": 42
    }
)
```

**Example - Image-to-Video:**
```python
request = SubmitRequestRequest(
    model="Image-to-Video-Model",
    payload={
        "image": "https://example.com/input-image.jpg",
        "prompt": "Animate this image with gentle movement",
        "duration": 5,
        "cfg_scale": 0.5
    }
)
```

#### Get Request Details

```python
def get_request_detail(request_id: str) -> GetRequestResponse:
    """
    Get detailed information about a specific request.
    
    Args:
        request_id: The ID of the request to retrieve
        
    Returns:
        Detailed request information including status and results
    """
```

**Response Structure:**
```python
class GetRequestResponse(BaseModel):
    request_id: str           # Unique request identifier
    status: RequestStatus     # Current status
    model: str               # Model used
    payload: dict            # Original request parameters
    outcome: dict            # Generated video information
    created_at: int          # Creation timestamp
    updated_at: int          # Last update timestamp
    queued_at: int           # Queue timestamp
```

#### Get User Requests

```python
def get_requests(model_id: str) -> List[GetRequestResponse]:
    """
    Get all requests for a specific model.
    
    Args:
        model_id: The model ID to filter requests
        
    Returns:
        List of requests for the specified model
    """
```

**Example:**
```python
requests = client.video_manager.get_requests("Wan-AI_Wan2.1-T2V-14B")
for req in requests:
    print(f"Request ID: {req.request_id}")
    print(f"Status: {req.status}")
    print(f"Created: {req.created_at}")
    print("---")
```

## Request Status Reference

The SDK uses the following status values to track request progress:

```python
class RequestStatus(Enum):
    CREATED = "created"           # Request has been created
    QUEUED = "queued"            # Request is waiting in queue
    DISPATCHED = "dispatched"     # Request has been dispatched to worker
    PROCESSING = "processing"     # Video generation in progress
    SUCCESS = "success"          # Video generation completed successfully
    FAILED = "failed"            # Video generation failed
    CANCELLED = "cancelled"      # Request was cancelled
```

## Complete Example: Text-to-Video Generation

Here's a complete example that demonstrates the full workflow:

```python
import os
import sys
import time

from gmicloud import Client
from gmicloud._internal._models import SubmitRequestRequest

def time_to_str(time_in_seconds):
    """Convert seconds to a human-readable format."""
    hours, remainder = divmod(time_in_seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}"

# Initialize client
client = Client()

# 1. Get available models
print("=== Available Models ===")
models = client.video_manager.get_models()
for model in models:
    print(f"- {model.model}: {model.brief_description}")

# 2. Get model details
model_id = "Wan-AI_Wan2.1-T2V-14B"
print(f"\n=== Model Details for {model_id} ===")
model_detail = client.video_manager.get_model_detail(model_id)
print(f"Description: {model_detail.detailed_description}")
print(f"Parameters: {model_detail.parameters}")

# 3. Submit video generation request
print("\n=== Submitting Video Generation Request ===")
request = SubmitRequestRequest(
    model=model_id,
    payload={
        "prompt": "A majestic eagle soaring through a clear blue sky",
        "video_length": 5,
        "negative_prompt": "blurry, low quality, distorted",
        "cfg_scale": 7.5
    }
)

response = client.video_manager.create_request(request)
request_id = response.request_id
print(f"Request submitted with ID: {request_id}")

# 4. Monitor progress
print("\n=== Monitoring Progress ===")
count = 0
while True:
    request_detail = client.video_manager.get_request_detail(request_id)
    time_str = time_to_str(count * 5)
    
    print(f"[{time_str}] Status: {request_detail.status}")
    
    if request_detail.status == "success":
        print("✅ Video generation completed successfully!")
        print(f"Result: {request_detail.outcome}")
        break
    elif request_detail.status == "failed":
        print("❌ Video generation failed!")
        break
    elif request_detail.status == "cancelled":
        print("🚫 Request was cancelled!")
        break
    
    time.sleep(5)
    count += 1

# 5. Get all requests for this model
print(f"\n=== All Requests for {model_id} ===")
all_requests = client.video_manager.get_requests(model_id)
for req in all_requests:
    print(f"ID: {req.request_id}, Status: {req.status}, Created: {req.created_at}")
```

## Error Handling

The SDK provides comprehensive error handling:

```python
try:
    # Submit request
    response = client.video_manager.create_request(request)
except ValueError as e:
    print(f"Validation error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")

# Check for None responses
request_detail = client.video_manager.get_request_detail(request_id)
if request_detail is None:
    print("Failed to retrieve request details")
```

## Best Practices

### 1. Request Management
- Always store the `request_id` returned from `create_request()`
- Use appropriate polling intervals (5-10 seconds) to avoid overwhelming the API
- Implement timeout mechanisms for long-running requests

### 2. Error Handling
- Always check for `None` responses from API calls
- Handle different request statuses appropriately
- Implement retry logic for transient failures

### 3. Resource Management
- Monitor your usage and costs through the pricing information
- Clean up completed requests if needed
- Use appropriate video lengths and quality settings

### 4. Prompt Engineering
- Be specific and descriptive in your prompts
- Use negative prompts to avoid unwanted elements
- Experiment with different `cfg_scale` values for desired results

## Model-Specific Parameters

Different models may support different parameters. Always check the model details:

```python
model_detail = client.video_manager.get_model_detail(model_id)
print("Supported parameters:")
for param in model_detail.parameters:
    print(f"- {param.key}: {param.display_name} ({param.type})")
    if hasattr(param, 'min') and hasattr(param, 'max'):
        print(f"  Range: {param.min} - {param.max}")
```

## Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Verify your credentials are correct
   - Check that environment variables are properly set
   - Ensure your account has video generation permissions

2. **Request Failures**
   - Check the model parameters are valid
   - Verify the model ID exists and is available
   - Review the error details in the response

3. **Long Processing Times**
   - Video generation can take several minutes
   - Use appropriate polling intervals
   - Check the model's expected processing time

### Getting Help

For additional support:
<!-- - Contact: getstarted@gmicloud.ai -->
- Check the GMI Cloud platform: https://inference-engine.gmicloud.ai/
- Review the main SDK documentation in README.md

## API Limits and Pricing

- Video generation requests are processed asynchronously
- Processing time varies by model and video length
- Pricing is per second of video and varies by model
- Check `model_detail.price_info` for current pricing

<!-- ---
sidebar_position: 2
---
# Video API Reference (coming soon)

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
  curl https://api.gmi-serving.com/v1/models \
    -H "Authorization: Bearer $GMI_API_KEY" \
    -H "X-Organization-ID: your_org_id"
  ```

## List Video Models
`GET https://api.gmi-serving.com/video/models`

Lists available models with basic information about each model, including capabilities, ownership, and permissions.

### Example Request
```bash
curl https://api.gmi-serving.com/video/models \
  -H "Authorization: Bearer $GMI_API_KEY"
```

### Response
```json
{
  "object": "list",
  "data": [
    {
      "id": "",
      "object": "Wan-AI/Wan2.1",
      "created": 1687530000,
      "owned_by": "Wan-AI",
    },
    // ... other models ...
  ]
}
```


## Submit a Request

The client API handles the full request/response cycle. It submits the job, polls for status, and returns the result once processing completes.

```bash
response=$(curl --request POST \
  --url https://queue.gmi-serving.com/video/Wan2_1 \
  --header "Authorization: Key $GMI_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
     "prompt": "Baseball player hiting the ball, slow motion.",
     "image_url": "PUT YOUR IMAGE URL HERE"
   }')
```

> The command itself is async and will returns a `request_id` even the run time is short.  
> User is expected to use the Queue API (below) to poll status and fetch the final output.


---

## Queue API

Long-running jobs (e.g., video or batch LLM inference) should use the Queue API.

### Check Status

```bash
curl --request GET \
  --url https://queue.gmi-serving.com/video/requests/$REQUEST_ID/status \
  --header "Authorization: Key $GMI_API_KEY"
```

### Get the Result

```bash
curl --request GET \
  --url https://queue.gmi-serving.com/video/requests/$REQUEST_ID \
  --header "Authorization: Key $GMI_API_KEY"
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

## Schemas

### Image-to-Video (Input)

| Field            | Type                   | Default | Notes / Enum Values                             |
|------------------|------------------------|---------|-------------------------------------------------|
| `prompt`         | `string`               | —       | Prompt describing the desired video             |
| `image_url`      | `string` (URL)         | —       | Source image                                    |
| `duration`       | `enum`                 | `"5"`   | `5`, `10` (seconds)                             |
| `aspect_ratio`   | `enum`                 | `"16:9"`| `16:9`, `9:16`, `1:1`                           |
| `negative_prompt`| `string`               | `"blur, distort, and low quality"` | Undesired features                            |
| `seed_value`     | `string`               | `90347039510843`   | Seed value                           |


### Image-to-Video (Output)

```jsonc
{
  "video": {
    "url": "https://storage.gmi-serving.com/blablabla.mp4"
  }
}
``` -->
