# Obsidian Notes

Publish your public notes with MkDocs

## Hello World!

The `index.md` in the `/docs` folder is the homepage you see here.

The folders in `/docs` appear as the main sections on the navigation bar.

The notes appear as pages within these sections. For example, [[Note 1]] in `Topic 1`

## Hello World!

The `index.md` in the `/docs` folder is the homepage you see here.

The folders in `/docs` appear as the main sections on the navigation bar.

The notes appear as pages within these sections. For example, [[Note 1]] in `Topic 1`

## Hello World!

The `index.md` in the `/docs` folder is the homepage you see here.

The folders in `/docs` appear as the main sections on the navigation bar.

The notes appear as pages within these sections. For example, [[Note 1]] in `Topic 1`

### Admonitions

!!! note
    Achtung

### Annotation
Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
{ .annotate }

1.  :man_raising_hand: I'm an annotation! I can contain `code`, __formatted
    text__, images, ... basically anything that can be expressed in Markdown.

### Code blocks

```py
import numpy
```

``` py
import cv2 # (1)
```

1.  Komentarz do linijki kodu

### Content tabs

=== "C"

    ```c
    int main(void) { 
        return 0;
    }
    ```

=== "Python 3"

    ```py
    def main():
        ...
    ```

### Tables
| Method      | Description                          |
| :---------- | :----------------------------------- |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

### Diagrams
``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

### Footnotes
Lorem ipsum[^1] dolor sit amet
[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

### Grids
<div class="grid cards" markdown>

- :fontawesome-brands-html5: __HTML__ for content and structure
- :fontawesome-brands-js: __JavaScript__ for interactivity
- :fontawesome-brands-css3: __CSS__ for text running out of boxes
- :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

</div>

### Lists
- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque

### Math

$$
\operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
$$

## Hello World!

The `index.md` in the `/docs` folder is the homepage you see here.

The folders in `/docs` appear as the main sections on the navigation bar.

The notes appear as pages within these sections. For example, [[Note 1]] in `Topic 1`