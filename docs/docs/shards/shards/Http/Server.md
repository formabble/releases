---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# Http.Server

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Any input type is accepted. The input value will pass through unchanged. | | [`Any`](../../types/#any) |
| `Output ➡️` ||Outputs the input value, passed through unchanged. | | [`Any`](../../types/#any) |
| `Handler` | :fontawesome-solid-circle-plus:{title="No"} No  | The wire that will be spawned and handle a remote request. | `None` | [`Wire`](../../types/#wire)[`None`](../../types/#none) |
| `Endpoint` | :fontawesome-solid-circle-plus:{title="No"} No  | The URL from where your service can be accessed by a client. | `0.0.0.0` | [`String`](../../types/#string) |
| `Port` | :fontawesome-solid-circle-plus:{title="No"} No  | The port this service will use. | `7070` | [`Int`](../../types/#int) |

</div>

This shard sets up an HTTP server that listens for incoming connections, creates new peers for each connection, and delegates request handling to the specified handler wire. It manages the lifecycle of connections and ensures proper cleanup when the server is stopped.

--8<-- "includes/license.md"

