# GMI Inference Engine API Reference

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

## List Models
`GET https://api.gmi-serving.com/v1/models`

Lists available models with basic information about each model, including capabilities, ownership, and permissions.

### Example Request
```bash
curl https://api.gmi-serving.com/v1/models \
  -H "Authorization: Bearer $GMI_API_KEY"
```

### Response
```json
{
  "object": "list",
  "data": [
    {
      "id": "",
      "object": "deepseek-ai/DeepSeek-R1",
      "created": 1687530000,
      "owned_by": "public",
    },
    // ... other models ...
  ]
}
```

### Response Parameters
| Parameter     | Type     | Description                                      |
|---------------|----------|--------------------------------------------------|
| `id`          | string   | Model identifier (e.g., "gpt-4o")                |
| `object`      | string   | Always "model"                                   |
| `created`     | integer  | Unix timestamp of model creation                 |
| `owned_by`    | string   | Organization that owns the model                 |

## Create Chat Completion
`POST https://api.gmi-serving.com/v1/chat/completions`

Creates a model response for the given chat conversation. Supports text, images, and audio modalities.

### Authorization
```http
Authorization: Bearer <token>
```

### Request Body
```json
{
"model": "deepseek-ai/DeepSeek-R1",
"messages": [
{"role": "user", "content": "Hello!"}
],
"max_tokens": 2000,
"temperature": 1
}
```

#### Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `model` | string | Yes | - | Model identifier |
| `messages` | object[] | Yes | - | Conversation history |
| `tools` | object[] | No | - | Supported tools/functions |
| `max_tokens` | integer | No | 2000 | Max output tokens (1-128) |
| `temperature` | number | No | 1 | 0-2 sampling randomness |
| `top_p` | number | No | 1 | Nucleus sampling (0-1) |
| `top_k` | integer | No | - | Top-k sampling (1-128) |
| `ignore_eos` | boolean | No | false | Continue past EOS token |
| `stop` | string[] | No | - | Up to 4 stop sequences |
| `response_format` | object | No | - | Force output format (e.g., JSON) |
| `stream` | boolean | No | false | Stream partial progress |
| `context_length_exceeded_behavior` | string | No | truncate | "truncate" or "error" |


### Response
```json
{
"id": "chatcmpl-123",
"object": "chat.completion",
"created": 1677652288,
"model": "gpt-3.5-turbo",
"choices": [{
"message": {
"role": "assistant",
"content": "Hello! How can I help you today?"
}
}],
"usage": {
"prompt_tokens": 9,
"completion_tokens": 12,
"total_tokens": 21
}
}
```

#### Response Fields
| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique response ID |
| `object` | string | Always "chat.completion" |
| `created` | integer | Unix timestamp |
| `model` | string | Model used for generation |
| `choices` | object[] | Generated completions |
| `usage` | object | Token usage statistics |

### Important Notes
1. Use `response_format: {"type": "json_object"}` for JSON mode
2. Streaming responses include usage stats in final chunk
3. Default context handling differs from Other provider (truncates instead of erroring)
4. Multiple penalties interact - use carefully to avoid quality degradation

### Key Notes
1. Parameter support varies by model - check model documentation
2. New projects should use Responses format for latest features
3. Organization/project usage is tracked via headers
4. Find organization/project IDs in settings pages

