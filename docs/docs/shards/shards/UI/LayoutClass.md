---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.LayoutClass

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`Any`](../../types/#any) |
| `<output>` || | | [`Object`](../../types/#object) |
| `Parent` |  | The parent Layout class to inherit parameters from. | `None` | [`&Object`](../../types/#contextvar) |
| `MainDirection` |  | The main direction of the UI element layout. | `None` | [`LayoutDirection`](../../../enums/LayoutDirection) |
| `MainWrap` |  | Whether the UI elements in the layout should wrap around when reaching the end of the direction of the cursor. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `MainAlign` |  | How the UI elements in the layout should be aligned on the main axis. | `None` | [`LayoutAlign`](../../../enums/LayoutAlign) |
| `MainJustify` |  | Whether the UI elements in the layout should be justified along the main axis. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `CrossAlign` |  | How the UI elements in the layout should be aligned on the cross axis. | `None` | [`LayoutAlign`](../../../enums/LayoutAlign) |
| `CrossJustify` |  | Whether the UI elements in the layout should be justified along the across axis. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `MinSize` |  | The minimum size of the space to be reserved by this UI for its contents. This allows the UI to take up more space than required for its widget contents. Can be overidden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `MaxSize` |  | The maximum size of the space to be reserved by this UI for its contents. Prevents UI from taking as much space as possible. Can be overidden by FillWidth and FillHeight. | `None` | [`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `FillWidth` |  | Whether the Layout should take up the full width of the available space. | `None` | [`Bool`](../../types/#bool) |
| `FillHeight` |  | Whether the Layout should take up the full height of the available space. | `None` | [`Bool`](../../types/#bool) |
| `Disabled` |  | Whether the drawn layout should be disabled or not. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `Frame` |  | The frame to be drawn around the layout. | `None` | [`LayoutFrame`](../../../enums/LayoutFrame) |
| `EnableHorizontalScrollBar` |  | Enable the horizontal scroll bar. If either this or EnableVerticalScrollBar is true, a ScrollArea will be created within the layout. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `EnableVerticalScrollBar` |  | Enable the vertical scroll bar. If either this or EnableHorizontalScrollBar is true, a ScrollArea will be created within the layout. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollBarVisibility` |  | Whether the scroll bars of the scroll area should be AlwaysVisible, VisibleWhenNeeded, or Always Hidden. Default: AlwaysVisible | `None` | [`ScrollVisibility`](../../../enums/ScrollVisibility) |
| `ScrollAreaMinWidth` |  | The minimum width of the scroll area to be drawn. Note: This is not the minimum width of the contents of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollAreaMinHeight` |  | The minimum height of the scroll area to be drawn. Note: This is not the minimum height of the contents of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollAreaMaxWidth` |  | The maximum width of the scroll area to be drawn. Note: This is not the maximum width of the contents of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollAreaMaxHeight` |  | The maximum height of the scroll area to be drawn. Note: This is not the maximum height of the contents of the scroll area. | `None` | [`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollAreaAutoShrinkWidth` |  | Whether the scroll area's width should automatically shrink to fit the size of its contents. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaAutoShrinkHeight` |  | Whether the scroll area's height should automatically shrink to fit the size of its contents. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |
| `ScrollAreaEnableScrolling` |  | Whether the scroll area's scrolling should be enabled. This is akin to the disable setting for UI elements. | `None` | [`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar)[`None`](../../types/#none) |

</div>

--8<-- "includes/experimental.md"



--8<-- "includes/license.md"

