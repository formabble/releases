---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Style

<div class="sh-parameters" markdown="1">
| Name | - {: #sh-flags-row} | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` || | | [`None`](../../types/#none) |
| `<output>` || | | [`None`](../../types/#none) |
| `OverrideTextStyle` |  | If set this will change the default TextStyle for all widgets. | `None` | [`None`](../../types/#none)[`TextStyle`](../../../enums/TextStyle)[`&TextStyle`](../../types/#contextvar)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `FontId` |  | If set this will change the font family and size for all widgets. | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `TextStyles` |  | The FontFamily and size you want to use for a specific TextStyle. | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `DragValueTextStyle` |  | The style to use for DragValue text. | `None` | [`None`](../../types/#none)[`TextStyle`](../../../enums/TextStyle)[`&TextStyle`](../../types/#contextvar)[`String`](../../types/#string)[`&String`](../../types/#contextvar) |
| `Wrap` |  | If set, labels buttons wtc will use this to determine whether or not to wrap the text at the right edge of the Ui they are in. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `AnimationTime` |  | How many seconds a typical animation should last. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ExplanationTooltips` |  | Show tooltips explaining DragValues etc when hovered. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `ResizeGrabRadiusSide` |  | Mouse must be this close to the side of a window to resize | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ResizeGrabRadiusCorner` |  | Mouse must be this close to the corner of a window to resize | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ShowTooltipsOnlyWhenStill` |  | If `false`, tooltips will show up anytime you hover anything, even is mouse is still moving | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `ItemSpacing` |  | Horizontal and vertical spacing between widgets. | `None` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `WindowMargin` |  | Horizontal and vertical margins within a window frame. | `None` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar) |
| `ButtonPadding` |  | Button size is text size plus this on each side | `None` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `MenuMargin` |  | Horizontal and vertical margins within a menu frame. | `None` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar) |
| `Indent` |  | Indent collapsing regions etc by this much. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `InteractSize` |  | Minimum size of a DragValue, color picker button, and other small widgets. interact_size.y is the default height of button, slider, etc. Anything clickable should be (at least) this size. | `None` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`&Float2`](../../types/#contextvar) |
| `SliderWidth` |  | Default width of a Slider. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ComboWidth` |  | Default (minimum) width of a ComboBox. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `TextEditWidth` |  | Default width of a TextEdit. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `IconWidth` |  | Checkboxes, radio button and collapsing headers have an icon at the start. This is the width/height of the outer part of this icon (e.g. the BOX of the checkbox). | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `IconWidthInner` |  | Checkboxes, radio button and collapsing headers have an icon at the start. This is the width/height of the inner part of this icon (e.g. the check of the checkbox). | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `IconSpacing` |  | Checkboxes, radio button and collapsing headers have an icon at the start. This is the spacing between the icon and the text | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `TooltipWidth` |  | Width of a tooltip (on_hover_ui, on_hover_text etc). | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `IndentEndsWithHorizontalLine` |  | End indented regions with a horizontal line | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `ComboHeight` |  | Height of a combo-box before showing scroll bars. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollBarWidth` |  | Width of a scroll bar. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollHandleMinLength` |  | Make sure the scroll handle is at least this big | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollBarInnerMargin` |  | Margin between contents and scroll bar. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ScrollBarOuterMargin` |  | Margin between scroll bar and the outer container (e.g. right of a vertical scroll bar). | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `DarkMode` |  | If true, the visuals are overall dark with light text. If false, the visuals are overall light with dark text. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |
| `OverrideTextColor` |  | Override default text color for all text. | `None` | [`None`](../../types/#none)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar) |
| `Selection` |  |  | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `HyperlinkColor` |  | The color used for Hyperlink | `None` | [`None`](../../types/#none)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar) |
| `FaintBgColor` |  | Something just barely different from the background color. Used for Grid::striped. | `None` | [`None`](../../types/#none)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar) |
| `ExtremeBgColor` |  | Very dark or light color (for corresponding theme). Used as the background of text edits, scroll bars and others things that needs to look different from other interactive stuff. | `None` | [`None`](../../types/#none)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar) |
| `CodeBgColor` |  | Background color behind code-styled monospaced labels. | `None` | [`None`](../../types/#none)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar) |
| `WarnFgColor` |  | A good color for warning text (e.g. orange). | `None` | [`None`](../../types/#none)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar) |
| `ErrorFgColor` |  | A good color for error text (e.g. red). | `None` | [`None`](../../types/#none)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar) |
| `WindowRounding` |  | Window corner rounding. | `None` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar) |
| `WindowShadow` |  | Window shadow size. | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `WindowFill` |  | Window background color. | `None` | [`None`](../../types/#none)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar) |
| `WindowStroke` |  | Window stroke (border) color and thickness. | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `MenuRounding` |  | Menu corner rounding. | `None` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`&Float4`](../../types/#contextvar) |
| `PanelFill` |  | Panel background color. | `None` | [`None`](../../types/#none)[`Color`](../../types/#color)[`&Color`](../../types/#contextvar) |
| `PopupShadow` |  | Popup shadow size. | `None` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`&{Any}`](../../types/#contextvar) |
| `ResizeCornerSize` |  | Corner rounding for resize handle rects. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `TextCursorWidth` |  | Width of the line cursor when hovering over InputText etc. | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `TextCursorPreview` |  | Show where the text cursor would be if you clicked. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |
| `ClipRectMargin` |  | Allow child widgets to be just on the border and still have a stroke with some thickness | `None` | [`None`](../../types/#none)[`Float`](../../types/#float)[`&Float`](../../types/#contextvar) |
| `ButtonFrame` |  | Show a background behind buttons. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |
| `CollapsingHeaderFrame` |  | Show a background behind collapsing headers. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |
| `IndentHasLeftVLine` |  | Draw a vertical lien left of indented region, in e.g. CollapsingHeader. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |
| `Striped` |  | Whether or not Grids and Tables should be striped by default (have alternating rows differently colored). | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |
| `SliderTrailingFill` |  | Show trailing color behind the circle of a Slider. Default is OFF. Enabling this will affect ALL sliders, and can be enabled/disabled per slider with Slider::trailing_fill. | `None` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`&Bool`](../../types/#contextvar) |

</div>

--8<-- "includes/experimental.md"

Apply style changes to the current UI scope.

--8<-- "includes/license.md"

