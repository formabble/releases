---
authors: Formabble & contributors
license: CC-BY-SA-4.0
---


# UI.Style

<div class="sh-parameters" markdown="1">
| Name | Mandatory | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `⬅️ Input` ||The input of the shard, if any | | [`Any`](../../types/#any) |
| `Output ➡️` ||The resulting output of the shard | | [`Any`](../../types/#any) |
| `InheritDefault` | :fontawesome-solid-circle-plus:{title="No"} No  | Inherit default style instead of current style. | `false` | [`Bool`](../../types/#bool) |
| `OverrideTextStyle` | :fontawesome-solid-circle-plus:{title="No"} No  | If set this will change the default TextStyle for all widgets. | `none` | [`None`](../../types/#none)[`TextStyle`](../../../enums/TextStyle)[`Var(TextStyle)`](../../types/#contextvar)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `FontId` | :fontawesome-solid-circle-plus:{title="No"} No  | If set this will change the font family and size for all widgets. | `none` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `TextStyles` | :fontawesome-solid-circle-plus:{title="No"} No  | The FontFamily and size you want to use for a specific TextStyle. | `none` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `DragValueTextStyle` | :fontawesome-solid-circle-plus:{title="No"} No  | The style to use for DragValue text. | `none` | [`None`](../../types/#none)[`TextStyle`](../../../enums/TextStyle)[`Var(TextStyle)`](../../types/#contextvar)[`String`](../../types/#string)[`Var(String)`](../../types/#contextvar) |
| `Wrap` | :fontawesome-solid-circle-plus:{title="No"} No  | If set, labels, buttons, etc will use this to determine wrap behavior of the text at the right edge of the Ui they are in. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`TextWrap`](../../../enums/TextWrap) |
| `AnimationTime` | :fontawesome-solid-circle-plus:{title="No"} No  | How many seconds a typical animation should last. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ExplanationTooltips` | :fontawesome-solid-circle-plus:{title="No"} No  | Show tooltips explaining DragValues etc when hovered. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `ResizeGrabRadiusSide` | :fontawesome-solid-circle-plus:{title="No"} No  | Mouse must be this close to the side of a window to resize | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ResizeGrabRadiusCorner` | :fontawesome-solid-circle-plus:{title="No"} No  | Mouse must be this close to the corner of a window to resize | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ShowTooltipsOnlyWhenStill` | :fontawesome-solid-circle-plus:{title="No"} No  | If `false`, tooltips will show up anytime you hover anything, even is mouse is still moving | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `ItemSpacing` | :fontawesome-solid-circle-plus:{title="No"} No  | Horizontal and vertical spacing between widgets. | `none` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `WindowMargin` | :fontawesome-solid-circle-plus:{title="No"} No  | Horizontal and vertical margins within a window frame. | `none` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |
| `ButtonPadding` | :fontawesome-solid-circle-plus:{title="No"} No  | Button size is text size plus this on each side | `none` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `MenuMargin` | :fontawesome-solid-circle-plus:{title="No"} No  | Horizontal and vertical margins within a menu frame. | `none` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |
| `Indent` | :fontawesome-solid-circle-plus:{title="No"} No  | Indent collapsing regions etc by this much. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `InteractSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Minimum size of a DragValue, color picker button, and other small widgets. interact_size.y is the default height of button, slider, etc. Anything clickable should be (at least) this size. | `none` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `SliderWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Default width of a Slider. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ComboWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Default (minimum) width of a ComboBox. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `TextEditWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Default width of a TextEdit. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `IconWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Checkboxes, radio button and collapsing headers have an icon at the start. This is the width/height of the outer part of this icon (e.g. the BOX of the checkbox). | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `IconWidthInner` | :fontawesome-solid-circle-plus:{title="No"} No  | Checkboxes, radio button and collapsing headers have an icon at the start. This is the width/height of the inner part of this icon (e.g. the check of the checkbox). | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `IconSpacing` | :fontawesome-solid-circle-plus:{title="No"} No  | Checkboxes, radio button and collapsing headers have an icon at the start. This is the spacing between the icon and the text | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `DefaultAreaSize` | :fontawesome-solid-circle-plus:{title="No"} No  | The size used for the [`Ui::max_rect`] the first frame. Text will wrap at this width, and images that expand to fill the available space will expand to this size. | `none` | [`None`](../../types/#none)[`Float2`](../../types/#float2)[`Var(Float2)`](../../types/#contextvar) |
| `TooltipWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Width of a tooltip (on_hover_ui, on_hover_text etc). | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `IndentEndsWithHorizontalLine` | :fontawesome-solid-circle-plus:{title="No"} No  | End indented regions with a horizontal line | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool) |
| `ComboHeight` | :fontawesome-solid-circle-plus:{title="No"} No  | Height of a combo-box before showing scroll bars. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ScrollBarFloating` | :fontawesome-solid-circle-plus:{title="No"} No  | Use floating scroll bar. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `ScrollBarWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Width of a scroll bar. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ScrollBarFloatingWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Width of a floating scroll bar (not hovering). | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ScrollBarFloatingAllocatedWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Allocated width of a floating scroll bar (not hovering). | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ScrollHandleMinLength` | :fontawesome-solid-circle-plus:{title="No"} No  | Make sure the scroll handle is at least this big | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ScrollBarInnerMargin` | :fontawesome-solid-circle-plus:{title="No"} No  | Margin between contents and scroll bar. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ScrollBarOuterMargin` | :fontawesome-solid-circle-plus:{title="No"} No  | Margin between scroll bar and the outer container (e.g. right of a vertical scroll bar). | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ScrollBarDormantOpacity` | :fontawesome-solid-circle-plus:{title="No"} No  | Opacity of the scroll bar when dormant. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `DarkMode` | :fontawesome-solid-circle-plus:{title="No"} No  | If true, the visuals are overall dark with light text. If false, the visuals are overall light with dark text. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `OverrideTextColor` | :fontawesome-solid-circle-plus:{title="No"} No  | Override default text color for all text. | `none` | [`None`](../../types/#none)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar) |
| `Selection` | :fontawesome-solid-circle-plus:{title="No"} No  |  | `none` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `HyperlinkColor` | :fontawesome-solid-circle-plus:{title="No"} No  | The color used for Hyperlink | `none` | [`None`](../../types/#none)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar) |
| `FaintBgColor` | :fontawesome-solid-circle-plus:{title="No"} No  | Something just barely different from the background color. Used for Grid::striped. | `none` | [`None`](../../types/#none)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar) |
| `ExtremeBgColor` | :fontawesome-solid-circle-plus:{title="No"} No  | Very dark or light color (for corresponding theme). Used as the background of text edits, scroll bars and others things that needs to look different from other interactive stuff. | `none` | [`None`](../../types/#none)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar) |
| `CodeBgColor` | :fontawesome-solid-circle-plus:{title="No"} No  | Background color behind code-styled monospaced labels. | `none` | [`None`](../../types/#none)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar) |
| `WarnFgColor` | :fontawesome-solid-circle-plus:{title="No"} No  | A good color for warning text (e.g. orange). | `none` | [`None`](../../types/#none)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar) |
| `ErrorFgColor` | :fontawesome-solid-circle-plus:{title="No"} No  | A good color for error text (e.g. red). | `none` | [`None`](../../types/#none)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar) |
| `WindowRounding` | :fontawesome-solid-circle-plus:{title="No"} No  | Window corner rounding. | `none` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |
| `WindowShadow` | :fontawesome-solid-circle-plus:{title="No"} No  | Window shadow size. | `none` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `WindowFill` | :fontawesome-solid-circle-plus:{title="No"} No  | Window background color. | `none` | [`None`](../../types/#none)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar) |
| `WindowStroke` | :fontawesome-solid-circle-plus:{title="No"} No  | Window stroke (border) color and thickness. | `none` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `MenuRounding` | :fontawesome-solid-circle-plus:{title="No"} No  | Menu corner rounding. | `none` | [`None`](../../types/#none)[`Float4`](../../types/#float4)[`Var(Float4)`](../../types/#contextvar) |
| `PanelFill` | :fontawesome-solid-circle-plus:{title="No"} No  | Panel background color. | `none` | [`None`](../../types/#none)[`Color`](../../types/#color)[`Var(Color)`](../../types/#contextvar) |
| `PopupShadow` | :fontawesome-solid-circle-plus:{title="No"} No  | Popup shadow size. | `none` | [`None`](../../types/#none)[`{Any}`](../../types/#table)[`Var({Any})`](../../types/#contextvar) |
| `ResizeCornerSize` | :fontawesome-solid-circle-plus:{title="No"} No  | Corner rounding for resize handle rects. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `TextCursorWidth` | :fontawesome-solid-circle-plus:{title="No"} No  | Width of the line cursor when hovering over InputText etc. | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `TextCursorPreview` | :fontawesome-solid-circle-plus:{title="No"} No  | Show where the text cursor would be if you clicked. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `ClipRectMargin` | :fontawesome-solid-circle-plus:{title="No"} No  | Allow child widgets to be just on the border and still have a stroke with some thickness | `none` | [`None`](../../types/#none)[`Float`](../../types/#float)[`Var(Float)`](../../types/#contextvar) |
| `ButtonFrame` | :fontawesome-solid-circle-plus:{title="No"} No  | Show a background behind buttons. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `CollapsingHeaderFrame` | :fontawesome-solid-circle-plus:{title="No"} No  | Show a background behind collapsing headers. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `IndentHasLeftVLine` | :fontawesome-solid-circle-plus:{title="No"} No  | Draw a vertical lien left of indented region, in e.g. CollapsingHeader. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `Striped` | :fontawesome-solid-circle-plus:{title="No"} No  | Whether or not Grids and Tables should be striped by default (have alternating rows differently colored). | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |
| `SliderTrailingFill` | :fontawesome-solid-circle-plus:{title="No"} No  | Show trailing color behind the circle of a Slider. Default is OFF. Enabling this will affect ALL sliders, and can be enabled/disabled per slider with Slider::trailing_fill. | `none` | [`None`](../../types/#none)[`Bool`](../../types/#bool)[`Var(Bool)`](../../types/#contextvar) |

</div>

Apply style changes to the current UI scope.

## Examples

=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Style/2.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Style/2.shs.log"
  ```
&nbsp;
=== "Code"

  ```x86asm linenums="1"
  --8<-- "samples/shards/UI/Style/1.shs"
  ```

  ```
  --8<-- "samples/shards/UI/Style/1.shs.log"
  ```
&nbsp;
--8<-- "includes/license.md"

