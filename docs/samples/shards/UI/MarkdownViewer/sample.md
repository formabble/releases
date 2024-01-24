# UI.MarkdownViewer

| Name | -  | Description | Default | Type |
|------|---------------------|-------------|---------|------|
| `<input>` ||The markdown text to render. | | `String` |
| `<output>` ||The output of this shard will be its input. | | `String` |

**Code**

```clj
@wire(ui-wire {
  UI.Window(
    Title: "UI Markdown Viewer"
    Position: @f2(0 0)
    Anchor: Anchor::Center
    Width: 700
    Height: 400
    Contents: {
      UI.TopPanel(
        Contents: {
          "# Title

  ## Sub-title
  **list:**
  - item 1
  - item 2"
          UI.MarkdownViewer
        }
      )
    }
  )
} Looped: true)

{ui-behavior: ui-wire}
```
