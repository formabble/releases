---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.LayoutClass

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||Not used. | | [`Any`](../../types/#any) |
| `Output ➡️` ||A Layout class that can be used in other UI shards. | | [`Object`](../../types/#object) |
| `Parent` | :fontawesome-solid-circle-plus:{title="No"} No  | The parent Layout class to inherit parameters from. | `None` | [`&Object`](../../types/#contextvar)[`None`](../../types/#none) |
| `MainDirection` | :fontawesome-solid-circle-plus:{title="No"} No  | The primary direction of the UI element layout. | `None` | [`LayoutDirection`](../../../enums/LayoutDirection)[`None`](../../types/#none) |
| `MainWrap` | :fontawesome-solid-circle-plus:{title="No"} No  | Should UI elements wrap when reaching the end of the main direction. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `MainAlign` | :fontawesome-solid-circle-plus:{title="No"} No  | Alignment of UI elements along the main axis. | `None` | [`LayoutAlign`](../../../enums/LayoutAlign)[`None`](../../types/#none) |
| `MainJustify` | :fontawesome-solid-circle-plus:{title="No"} No  | Justification of UI elements along the main axis. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `CrossAlign` | :fontawesome-solid-circle-plus:{title="No"} No  | Alignment of UI elements along the cross axis. | `None` | [`LayoutAlign`](../../../enums/LayoutAlign)[`None`](../../types/#none) |
| `CrossJustify` | :fontawesome-solid-circle-plus:{title="No"} No  | Justification of UI elements along the cross axis. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `MinSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Minimum space reserved for UI contents. Overridden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar)[`None`](../../types/#none) |
| `MaxSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum space reserved for UI contents. Overridden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar)[`None`](../../types/#none) |
| `FillWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether the layout should occupy the full width. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `FillHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether the layout should occupy the full height. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Disabled` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether the layout should be disabled. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Frame` | :fontawesome-solid-circle-plus:{title="No"} No  | Frame to be drawn around the layout. | `None` | [`LayoutFrame`](../../../enums/LayoutFrame)[`None`](../../types/#none) |
| `EnableHorizontalScrollBar` | :fontawesome-solid-circle-plus:{title="No"} No  | Enable the horizontal scroll bar. Creates a ScrollArea if true. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `EnableVerticalScrollBar` | :fontawesome-solid-circle-plus:{title="No"} No  | Enable the vertical scroll bar. Creates a ScrollArea if true. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollBarVisibility` | :fontawesome-solid-circle-plus:{title="No"} No  | Visibility of the scroll bars: AlwaysVisible, VisibleWhenNeeded, or AlwaysHidden. Default: AlwaysVisible. | `None` | [`ScrollVisibility`](../../../enums/ScrollVisibility)[`None`](../../types/#none) |
| `ScrollAreaMinWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Minimum width of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaMinHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Minimum height of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaMaxWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum width of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaMaxHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Maximum height of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaAutoShrinkWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Auto-shrink scroll area width to fit contents. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaAutoShrinkHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Auto-shrink scroll area height to fit contents. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaEnableScrolling` | :fontawesome-solid-circle-plus:{title="No"} No  | Enable scrolling in the scroll area. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

This shard creates a Layout class that can be used in other UI shards.

--8<-- "includes/license.md"

