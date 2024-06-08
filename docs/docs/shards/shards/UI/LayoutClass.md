---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.LayoutClass

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Object`](../../types/#object) |
| `Parent` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The parent Layout class to inherit parameters from. | `None` | [`&Object`](../../types/#contextvar) |
| `MainDirection` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The main direction of the UI element layout. | `None` | [`LayoutDirection`](../../../enums/LayoutDirection) |
| `MainWrap` | :fontawesome-solid-circle-plus:{title="No"}  | Whether the UI elements in the layout should wrap around when reaching the end of the direction of the cursor. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `MainAlign` | :fontawesome-solid-circle-xmark:{title="Yes"}  | How the UI elements in the layout should be aligned on the main axis. | `None` | [`LayoutAlign`](../../../enums/LayoutAlign) |
| `MainJustify` | :fontawesome-solid-circle-plus:{title="No"}  | Whether the UI elements in the layout should be justified along the main axis. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `CrossAlign` | :fontawesome-solid-circle-xmark:{title="Yes"}  | How the UI elements in the layout should be aligned on the cross axis. | `None` | [`LayoutAlign`](../../../enums/LayoutAlign) |
| `CrossJustify` | :fontawesome-solid-circle-plus:{title="No"}  | Whether the UI elements in the layout should be justified along the across axis. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `MinSize` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The minimum size of the space to be reserved by this UI for its contents. This allows the UI to take up more space than required for its widget contents. Can be overidden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `MaxSize` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The maximum size of the space to be reserved by this UI for its contents. Prevents UI from taking as much space as possible. Can be overidden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `FillWidth` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Whether the Layout should take up the full width of the available space. | `None` | [`Bool`](../../types/#bool) |
| `FillHeight` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Whether the Layout should take up the full height of the available space. | `None` | [`Bool`](../../types/#bool) |
| `Disabled` | :fontawesome-solid-circle-plus:{title="No"}  | Whether the drawn layout should be disabled or not. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Frame` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The frame to be drawn around the layout. | `None` | [`LayoutFrame`](../../../enums/LayoutFrame) |
| `EnableHorizontalScrollBar` | :fontawesome-solid-circle-plus:{title="No"}  | Enable the horizontal scroll bar. If either this or EnableVerticalScrollBar is true, a ScrollArea will be created within the layout. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `EnableVerticalScrollBar` | :fontawesome-solid-circle-plus:{title="No"}  | Enable the vertical scroll bar. If either this or EnableHorizontalScrollBar is true, a ScrollArea will be created within the layout. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollBarVisibility` | :fontawesome-solid-circle-xmark:{title="Yes"}  | Whether the scroll bars of the scroll area should be AlwaysVisible, VisibleWhenNeeded, or Always Hidden. Default: AlwaysVisible | `None` | [`ScrollVisibility`](../../../enums/ScrollVisibility) |
| `ScrollAreaMinWidth` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The minimum width of the scroll area to be drawn. Note: This is not the minimum width of the contents of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollAreaMinHeight` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The minimum height of the scroll area to be drawn. Note: This is not the minimum height of the contents of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollAreaMaxWidth` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The maximum width of the scroll area to be drawn. Note: This is not the maximum width of the contents of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollAreaMaxHeight` | :fontawesome-solid-circle-xmark:{title="Yes"}  | The maximum height of the scroll area to be drawn. Note: This is not the maximum height of the contents of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollAreaAutoShrinkWidth` | :fontawesome-solid-circle-plus:{title="No"}  | Whether the scroll area's width should automatically shrink to fit the size of its contents. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaAutoShrinkHeight` | :fontawesome-solid-circle-plus:{title="No"}  | Whether the scroll area's height should automatically shrink to fit the size of its contents. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaEnableScrolling` | :fontawesome-solid-circle-plus:{title="No"}  | Whether the scroll area's scrolling should be enabled. This is akin to the disable setting for UI elements. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |

</div>



--8<-- "includes/license.md"

