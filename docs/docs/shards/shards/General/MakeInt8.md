---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# MakeInt8

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||No input is required. This shard uses parameters to construct a vector of the specified type. | | [`None`](../../types/#none) |
| `Output ➡️` ||The constructed vector with the specified components. If not all components are provided, default values will be used for the remaining components. | | [`Any`](../../types/#any) |
| `0` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector component | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |
| `1` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector component | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |
| `2` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector component | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |
| `3` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector component | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |
| `4` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector component | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |
| `5` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector component | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |
| `6` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector component | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |
| `7` | :fontawesome-solid-circle-xmark:{title="Yes"} Yes  | Vector component | `None` | [`&Int`](../../types/#contextvar)[`Int`](../../types/#int) |

</div>

Constructs a vector of the specified type (e.g., integers, floats, colors) using the given component values. If only one component is provided, it will be broadcasted to all components. For MakeColor, missing components will be filled with default values. Use @i2, @i3, @i4, @i8, @i16, @f2, @f3, @f4 built-ins for convenience.

--8<-- "includes/license.md"

