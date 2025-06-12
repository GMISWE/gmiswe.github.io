
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rate limits
To maintain system stability and equitable access, our API enforces rate limiting—controlling how frequently an organization can send requests within a certain time window.

## How do these rate limits work?
API rate limits are defined in two ways:
- **TPM (Tokens per Minute)** for LLM models
- **RPH (Requests per Hour)** for video models

These limits are enforced at the organization level.

##  Usage tiers
Rate limits vary by usage tier, with each tier offering different quotas for each model. By default, organizations are assigned to Tier 1. To request a higher rate limit, please contact sales@gmiclou.ai for an upgrade. 

## Rate Limit Table

<Tabs>
<TabItem value="tpm" label="LLM Model Rate Limits">

| Mode Name                                      | Tier Name | TPM        |
|------------------------------------------------|-----------|------------|
| deepseek-ai/DeepSeek-R1                        | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-R1                        | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-R1                        | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-R1                        | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-R1                        | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B     | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B     | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B     | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B     | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B     | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-7B      | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-7B      | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-7B      | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-7B      | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-7B      | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-14B     | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-14B     | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-14B     | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-14B     | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-14B     | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-32B     | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-32B     | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-32B     | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-32B     | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-32B     | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-R1-Distill-Llama-8B     | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-R1-Distill-Llama-8B     | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-R1-Distill-Llama-8B     | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-R1-Distill-Llama-8B     | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-R1-Distill-Llama-8B     | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-R1-Distill-Llama-70B    | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-R1-Distill-Llama-70B    | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-R1-Distill-Llama-70B    | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-R1-Distill-Llama-70B    | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-R1-Distill-Llama-70B    | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-V3                      | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-V3                      | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-V3                      | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-V3                      | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-V3                      | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-V3-Base                 | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-V3-Base                 | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-V3-Base                 | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-V3-Base                 | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-V3-Base                 | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-R2                      | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-R2                      | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-R2                      | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-R2                      | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-R2                      | Tier 5    | 30,000,000 |
| deepseek-ai/DeepSeek-R1-Zero                 | Tier 1    | 30,000     |
| deepseek-ai/DeepSeek-R1-Zero                 | Tier 2    | 450,000    |
| deepseek-ai/DeepSeek-R1-Zero                 | Tier 3    | 800,000    |
| deepseek-ai/DeepSeek-R1-Zero                 | Tier 4    | 2,000,000  |
| deepseek-ai/DeepSeek-R1-Zero                 | Tier 5    | 30,000,000 |
| meta-llama/Llama-3.1-8B                      | Tier 1    | 200,000    |
| meta-llama/Llama-3.1-8B                      | Tier 2    | 2,000,000  |
| meta-llama/Llama-3.1-8B                      | Tier 3    | 4,000,000  |
| meta-llama/Llama-3.1-8B                      | Tier 4    | 10,000,000 |
| meta-llama/Llama-3.1-8B                      | Tier 5    | 150,000,000|
| meta-llama/Llama-3.1-8B-Instruct             | Tier 1    | 200,000    |
| meta-llama/Llama-3.1-8B-Instruct             | Tier 2    | 2,000,000  |
| meta-llama/Llama-3.1-8B-Instruct             | Tier 3    | 4,000,000  |
| meta-llama/Llama-3.1-8B-Instruct             | Tier 4    | 10,000,000 |
| meta-llama/Llama-3.1-8B-Instruct             | Tier 5    | 150,000,000|
| meta-llama/Llama-3.3-70B-Instruct            | Tier 1    | 200,000    |
| meta-llama/Llama-3.3-70B-Instruct            | Tier 2    | 2,000,000  |
| meta-llama/Llama-3.3-70B-Instruct            | Tier 3    | 4,000,000  |
| meta-llama/Llama-3.3-70B-Instruct            | Tier 4    | 10,000,000 |
| meta-llama/Llama-3.3-70B-Instruct            | Tier 5    | 150,000,000|
| Qwen/QwQ-32B                                  | Tier 1    | 200,000    |
| Qwen/QwQ-32B                                  | Tier 2    | 2,000,000  |
| Qwen/QwQ-32B                                  | Tier 3    | 4,000,000  |
| Qwen/QwQ-32B                                  | Tier 4    | 10,000,000 |
| Qwen/QwQ-32B                                  | Tier 5    | 150,000,000|
| Qwen/QwQ-32B-Preview                          | Tier 1    | 200,000    |
| Qwen/QwQ-32B-Preview                          | Tier 2    | 2,000,000  |
| Qwen/QwQ-32B-Preview                          | Tier 3    | 4,000,000  |
| Qwen/QwQ-32B-Preview                          | Tier 4    | 10,000,000 |
| Qwen/QwQ-32B-Preview                          | Tier 5    | 150,000,000|
| Qwen/QwQ-32B-GGUF                             | Tier 1    | 200,000    |
| Qwen/QwQ-32B-GGUF                             | Tier 2    | 2,000,000  |
| Qwen/QwQ-32B-GGUF                             | Tier 3    | 4,000,000  |
| Qwen/QwQ-32B-GGUF                             | Tier 4    | 10,000,000 |
| Qwen/QwQ-32B-GGUF                             | Tier 5    | 150,000,000|
| Qwen/QwQ-32B-AWQ                              | Tier 1    | 200,000    |
| Qwen/QwQ-32B-AWQ                              | Tier 2    | 2,000,000  |
| Qwen/QwQ-32B-AWQ                              | Tier 3    | 4,000,000  |
| Qwen/QwQ-32B-AWQ                              | Tier 4    | 10,000,000 |
| Qwen/QwQ-32B-AWQ                              | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-0.5B-Instruct                    | Tier 1    | 200,000    |
| Qwen/Qwen2.5-0.5B-Instruct                    | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-0.5B-Instruct                    | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-0.5B-Instruct                    | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-0.5B-Instruct                    | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-1.5B-Instruct                    | Tier 1    | 200,000    |
| Qwen/Qwen2.5-1.5B-Instruct                    | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-1.5B-Instruct                    | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-1.5B-Instruct                    | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-1.5B-Instruct                    | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-7B-Instruct                      | Tier 1    | 200,000    |
| Qwen/Qwen2.5-7B-Instruct                      | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-7B-Instruct                      | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-7B-Instruct                      | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-7B-Instruct                      | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-7B-Instruct-1M                   | Tier 1    | 200,000    |
| Qwen/Qwen2.5-7B-Instruct-1M                   | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-7B-Instruct-1M                   | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-7B-Instruct-1M                   | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-7B-Instruct-1M                   | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-7B-Instruct-AWQ                  | Tier 1    | 200,000    |
| Qwen/Qwen2.5-7B-Instruct-AWQ                  | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-7B-Instruct-AWQ                  | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-7B-Instruct-AWQ                  | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-7B-Instruct-AWQ                  | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-7B-Instruct-GGUF                 | Tier 1    | 200,000    |
| Qwen/Qwen2.5-7B-Instruct-GGUF                 | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-7B-Instruct-GGUF                 | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-7B-Instruct-GGUF                 | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-7B-Instruct-GGUF                 | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4            | Tier 1    | 200,000    |
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4            | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4            | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4            | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4            | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int8            | Tier 1    | 200,000    |
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int8            | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int8            | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int8            | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-7B-Instruct-GPTQ-Int8            | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-VL-7B-Instruct                   | Tier 1    | 200,000    |
| Qwen/Qwen2.5-VL-7B-Instruct                   | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-VL-7B-Instruct                   | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-VL-7B-Instruct                   | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-VL-7B-Instruct                   | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-Coder-7B-Instruct                | Tier 1    | 200,000    |
| Qwen/Qwen2.5-Coder-7B-Instruct                | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-Coder-7B-Instruct                | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-Coder-7B-Instruct                | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-Coder-7B-Instruct                | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-Math-7B-Instruct                 | Tier 1    | 200,000    |
| Qwen/Qwen2.5-Math-7B-Instruct                 | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-Math-7B-Instruct                 | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-Math-7B-Instruct                 | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-Math-7B-Instruct                 | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-14B                              | Tier 1    | 200,000    |
| Qwen/Qwen2.5-14B                              | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-14B                              | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-14B                              | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-14B                              | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-14B-Instruct                     | Tier 1    | 200,000    |
| Qwen/Qwen2.5-14B-Instruct                     | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-14B-Instruct                     | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-14B-Instruct                     | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-14B-Instruct                     | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-14B-Instruct-AWQ                 | Tier 1    | 200,000    |
| Qwen/Qwen2.5-14B-Instruct-AWQ                 | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-14B-Instruct-AWQ                 | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-14B-Instruct-AWQ                 | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-14B-Instruct-AWQ                 | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-14B-Instruct-GGUF                | Tier 1    | 200,000    |
| Qwen/Qwen2.5-14B-Instruct-GGUF                | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-14B-Instruct-GGUF                | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-14B-Instruct-GGUF                | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-14B-Instruct-GGUF                | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-14B-Instruct-GPTQ-Int4           | Tier 1    | 200,000    |
| Qwen/Qwen2.5-14B-Instruct-GPTQ-Int4           | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-14B-Instruct-GPTQ-Int4           | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-14B-Instruct-GPTQ-Int4           | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-14B-Instruct-GPTQ-Int4           | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-Coder-14B-Instruct               | Tier 1    | 200,000    |
| Qwen/Qwen2.5-Coder-14B-Instruct               | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-Coder-14B-Instruct               | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-Coder-14B-Instruct               | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-Coder-14B-Instruct               | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-32B                              | Tier 1    | 200,000    |
| Qwen/Qwen2.5-32B                              | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-32B                              | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-32B                              | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-32B                              | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-32B-Instruct                     | Tier 1    | 200,000    |
| Qwen/Qwen2.5-32B-Instruct                     | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-32B-Instruct                     | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-32B-Instruct                     | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-32B-Instruct                     | Tier 5    | 150,000,000|
| Qwen/Qwen2.5-Coder-32B-Instruct               | Tier 1    | 200,000    |
| Qwen/Qwen2.5-Coder-32B-Instruct               | Tier 2    | 2,000,000  |
| Qwen/Qwen2.5-Coder-32B-Instruct               | Tier 3    | 4,000,000  |
| Qwen/Qwen2.5-Coder-32B-Instruct               | Tier 4    | 10,000,000 |
| Qwen/Qwen2.5-Coder-32B-Instruct               | Tier 5    | 150,000,000|

</TabItem>
<TabItem value="rph" label="Video Model Rate Limits(Coming Soon)">

| Mode Name                                      | Tier Name | RPH |
|------------------------------------------------|-----------|-----|
| Kling-Text2Video-V1.6-Pro                      | Tier 1    | TBD |
| Kling-Text2Video-V1.6-Pro                     | Tier 2    | TBD |
| Kling-Text2Video-V1.6-Pro                    | Tier 3    | TBD |
| Kling-Text2Video-V1.6-Pro                      | Tier 4    | TBD |
| Kling-Text2Video-V1.6-Pro                      | Tier 5    | TBD |
</TabItem>
</Tabs>

