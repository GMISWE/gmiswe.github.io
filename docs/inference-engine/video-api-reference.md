---
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
```
