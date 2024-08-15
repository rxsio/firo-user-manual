---
title: Writing User Manual

version: 0.1.0
date: 15.08.2024
authors:
  - Patryk Filip Gryz, pfgryz@gmail.com
---

Creating a user manual is essential for helping users understand and effectively utilize a product or service. A well-structured user manual improves user experience and supports users in resolving issues independently. This guideline provides key principles for writing an effective user manual and an overview of Markdown components for organizing content.

## General Rules

1. **Be Clear and Concise:** Use simple language, avoid technical jargon and use step-by-step instructions.
2. **Organize Information Logically:** Use headings, subheadings, and bullet points for clear structure, and include a table of contents if the document is lengthy.
3. **Provide Context:** Offer an introduction and explain the manual’s purpose.
4. **Use Visual Aids:** Add screenshots, diagrams, and captions for clarity.
4. **Update Regularly:** Revise to reflect product changes and keep instructions accurate

## Creating New Page

To create a new user manual page:

- create a new file in the folder that best fits the topic you're working on.
- ensure that you adhere to the hierarchical folder structure.
- use the appropriate file naming convention.
- add the page to the navigation.
- provide the correct metadata description. siusiak
- use rich Markdown components.

### File Naming

- files should be in lowercase, using `-` instead of spaces.
- folders should be in lowercase and organized hierarchically.

!!! example

    ```md
        docs
        ├── assets
        │   ├── favicon.ico
        │   ├── javascripts
        │   │   └── mathjax.js
        │   └── logo.png
        ├── index.md
        └── resources
            ├── guidelines
            │   ├── mechanical-file-naming-and-structure.md
            │   └── writing-user manua.md
            └── template
                ├── pcb-documentation-template.md
                └── pcb-repository-template.md
    ```

### Navigation

To add a page to the navigation:

- edit the `nav` section in the `mkdocs.yml` file.
- add a new entry under the appropriate category that corresponds to your page.

```yaml
nav:
  - Other Category:
      - other-category/other-file.md
  - Your Section Name:
      - your-section-name/other-file.md
      - Your Subsection Name:
          - your-section-name/your-subsection-name/your-file.md # <-- YOUR ENTRY
```

!!! note

    Order of entries in the file reflects the order in the user manua.

### Metadata

Metadata allows you to edit various aspects of a user manua page. Currently, the user manua supports the following fields:

- Title
- Authors
- Date
- Version

!!! note
    
    The title and authors are mandatory fields that must be included in the page metadata. Author's email address should be put after `,`.

!!! example

    Author's email address should be put after `,`

    ```md
    ---
    title: Your Title
    authors:
      - John Smith, smith@example.com
      - Jan Kowalski, jan-kowalski@example.com
    version: 1.0
    date: 14.08.2024
    ---

    Content
    ```

## Markdown

User manual should be written in Markdown. By using various Markdown components, you can create engaging and accessible user manual.

### Text Formatting

Basic formatting allows you to enhance text by applying styles such as bold, italic, and underline. It helps emphasize important information, improve readability, and structure content effectively.

???+ example

    === "Content"

        **FIRO** (*FLASH Inspection Rover*, also known as *Facility Inspection Rover*) is a mobile robot designed to operate in environments where human presence is ==restricted due to hazardous radiation levels.== It is a ^^student project^^ developed mostly during Erasmus internships at the FLASH particle accelerator at DESY

        - **bold**
        - *italic*
        - ^^underline^^
        - ==highlight==
        - ~~strike~~

    === "Markdown"

        ```
        **FIRO** (*FLASH Inspection Rover*, also known as *Facility Inspection Rover*) is a mobile robot designed to operate in environments where human presence is ==restricted due to hazardous radiation levels.== It is a ^^student project^^ developed mostly during Erasmus internships at the FLASH particle accelerator at DESY

        - **bold**
        - *italic*
        - ^^underline^^
        - ==highlight==
        - ~~strike~~
        ```

### Headers

Headers organize content into sections, making it easier to navigate and understand the structure of your user manua. They are useful for highlighting key topics, creating.

???+ example

    ```
    # System A
    ## Subsystem B
    ### Module C
    #### Component D
    ```

### Lists

Lists organize information into clear, manageable points, making content easier to read and understand. They are useful for outlining steps, summarizing key points, or grouping related items.

???+ example "Example: Basic list"

    === "Content"

        1. Software
          - Interface
          - Cameras
        2. Electronics
        3. Mechanics

    === "Markdown"

        ```
        4. Software
          - Interface
          - Cameras
        5. Electronics
        6. Mechanics
        ```

???+ example "Example: List with checks"

    === "Content"

        Interface
        - [ ] Camera streams
          * [x] Basic streams
          * [ ] Bridge to ROS2
        - [ ] Charts
        - [x] Controller support

    === "Markdown"

        ````md
        Interface
        - [ ] Camera streams
            * [x] Basic streams
            * [ ] Bridge to ROS2
        - [ ] Charts
        - [x] Controller support
        ````

### Tables

Tables present data in a structured, grid format, making it easy to compare and analyze information. They are useful for displaying statistics, comparing features, or organizing detailed information systematically.

???+ example

    === "Content"

        | Name   | Description                |
        | :----- | :------------------------- |
        | FIRO   | Mobile robot               |
        | RadCon | Real-time Gamma Dosimeter  |
        | FLASH  | Linear accelerator at DESY |

    === "Markdown"

        ```md
        | Name   | Description                |
        | :----- | :------------------------- |
        | FIRO   | Mobile robot               |
        | RadCon | Real-time Gamma Dosimeter  |
        | FLASH  | Linear accelerator at DESY |
        ```

### Grids

Grids arrange content in a structured, multi-column layout, providing a visually appealing way to display related information. They are useful for organizing complex data, showcasing comparisons, or creating responsive designs in user manua.

???+ example

    === "Content"

        <div class="grid cards" markdown>

        - :fontawesome-brands-html5: __HTML__ for content and structure
        - :fontawesome-brands-js: __JavaScript__ for interactivity
        - :fontawesome-brands-css3: __CSS__ for text running out of boxes
        - :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

        </div>

    === "Markdown"

        ````md
        <div class="grid cards" markdown>

        - :fontawesome-brands-html5: __HTML__ for content and structure
        - :fontawesome-brands-js: __JavaScript__ for interactivity
        - :fontawesome-brands-css3: __CSS__ for text running out of boxes
        - :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

        </div>
        ````

### Code Blocks

Code blocks allow you to display formatted code snippets within your user manua, making it easier for readers to understand and replicate coding examples. They are essential for illustrating programming concepts, providing step-by-step instructions, and sharing command-line operations or configuration files in a clear and readable manner.

???+ example

    === "Content"
        ```py
        def main():
            ...

        if __name__ == "__main__":
            main()
        ```

    === "Markdown"
        ````md 
        ```py
        def main():
            ...

        if __name__ == "__main__":
            main()
        ```
        ````

### Admonitions

Admonitions in user manua allow you to draw the user's attention to important issues. Using the appropriate type, such as notes, warnings, or tips, is key for effective communication.


???+ example

    === "Content"

        !!! note
            This is note admonition

        ???+ warning
            This is warning admonition. It is auto expanded

        ??? danger
            This is danger admonition. You can expand this admonition

    === "Markdown"
        ```md
        !!! note
            This is note admonition

        ???+ warning
            This is warning admonition. It is auto expanded

        ??? danger
            This is danger admonition. You can expand this admonition
        ```

#### Available Types
??? note 
    Use for general important information or reminders.
??? abstract
    Summarize key points or concepts succinctly.
??? info
    Provide additional context or background information.
??? tip 
    Share helpful advice or best practices.
??? success 
    Indicate successful outcomes or positive results.
??? question
    Pose questions to engage readers or prompt thinking.
??? warning
    Highlight potential issues or cautionary advice.
??? failure
    Discuss failures or mistakes to avoid.
??? danger
    Alert users to critical issues or severe risks.
??? bug
    Document known bugs or issues in the system.
??? example
    Illustrate concepts with practical examples.
??? quote
    Highlight significant quotes or key statements.
??? outdated
    Marks outdated section of the user manua
??? expand
    As placeholder for planning structure of page

### Annotations

Annotations are little markers that can be added almost anywhere in document. When users click on or focus these markers, a tooltip appears with expandable content. You can use them to add additional content for some topics.

???+ example

    === "Content"

        The rover has builtin watchdog (1)
        { .annotate }

        1. A watchdog is a monitoring system or process designed to ensure that a computer system or application is functioning correctly and to detect and respond to failures or issues.

    === "Markdown"

        ```md
        The rover has builtin watchdog (1)
        { .annotate }

        1. A watchdog is a monitoring system or process designed to ensure that a computer system or application is functioning correctly and to detect and respond to failures or issues.
        ```

### Pins

Pins allow for placing annotations on images, which can be useful for highlighting specific areas

- `pin-big`: Enlarges the pin.
- `pin-contrast`: Creates a high-contrast pin.
- `data-x` and `data-y`: Set the pin's position as a percentage on the image.
- `data-id`: Sets the index of the image to which the pin belongs. Indexing starts from `0`

???+ example

    === "Content"

        <div class="image-box pins annotate" markdown>
        ![Image title](https://dummyimage.com/600x200/eee/aaa){ align=center }

        <span class="pin pin-big pin-contrast" data-x="0.5" data-y="0.5" data-id="0">(1)</span>
        </div>

        1. This is center of image

    === "Markdown"

        ```md
        <div class="image-box pins annotate" markdown>
        ![Image title](https://dummyimage.com/600x200/eee/aaa){ align=center }

        <span class="pin pin-big pin-contrast" data-x="0.5" data-y="0.5" data-id="0">(1)</span>
        </div>

        1. This is center of image
        ```

### Carousel

The carousel feature allows for displaying multiple images in a slideshow format. Users can navigate through the images to get a comprehensive view.

???+ example

    === "Content"

        <div class="image-box carousel center" markdown>
        ![Image title](https://dummyimage.com/300x200/eee/aaa){ align=center }
        ![Image title](https://dummyimage.com/600x200/000/fff){ align=center }
        </div>

    === "Markdown"

        ```md
        <div class="image-box carousel center" markdown>
        ![Image title](https://dummyimage.com/300x200/eee/aaa){ align=center }
        ![Image title](https://dummyimage.com/600x200/000/fff){ align=center }
        </div>
        ```

???+ example "Example: Mixing with pins"
    === "Content"

        <div class="image-box carousel pins annotate center" markdown>
        ![Image title](https://dummyimage.com/300x200/eee/aaa){ align=center }
        ![Image title](https://dummyimage.com/600x200/000/fff){ align=center }

        <span class="pin pin-big pin-contrast" data-x="0.5" data-y="0.5" data-id="1">(1)</span>
        <span class="pin pin-big pin-contrast" data-x="0.2" data-y="0.5" data-id="0">(2)</span>
        </div>

        1. This is center of second image
        2. Left side of first image

    === "Markdown"

        ```md
        <div class="image-box carousel center" markdown>
        ![Image title](https://dummyimage.com/600x200/eee/aaa){ align=center }

        ![Image title](https://dummyimage.com/600x200/000/fff){ align=center }

        </div>
        ```

### Footnotes

Footnotes provide additional information or references without interrupting the flow of the main text. They are useful for citing sources, adding clarifications, or offering supplementary details.

???+ example

    === "Content"

        We use RadCon[^1] dosimeter as main component for radiation data collection submodule

        [^1]: Markus Hoffmann, MichaelFenner, Stanislav Chystiakov, Julien Branlard, Holger Schlarb, Bhaskar Mukherjee, *RadCon a real-time Gamma Dosimeter for XFEL using PIN-Diode-Sensors*, 2019

    === "Markdown"

        ````md
        We use RadCon[^1] dosimeter as main component for radiation data collection submodule

        [^1]: Markus Hoffmann, MichaelFenner, Stanislav Chystiakov, Julien Branlard, Holger Schlarb, Bhaskar Mukherjee, *RadCon a real-time Gamma Dosimeter for XFEL using PIN-Diode-Sensors*, 2019
        ````

### Formulas

Formulas allow you to present mathematical equations and expressions clearly within your user manua. They are essential for explaining calculations, scientific concepts, and technical details accurately and concisely. Using LaTeX make formulas easy to read and use.

???+ example

    === "Content"

        $$
        R = \frac{U}{I}
        $$

    === "Markdown"

        ````md
        $$
        R = \frac{U}{I}
        $$
        ````

### Diagrams

Diagrams visually represent complex concepts, processes, or relationships, making them easier to understand. They enhance user manua by providing clear, illustrative explanations that complement textual descriptions.

???+ example "Example: Basic graph"

    === "Content"

        ``` mermaid
        %%{init: {'theme': 'dark'}}%%
        graph LR
        
        A(Start) --> B{Error?};
        B -- Yes --> C[Debug];
        B -- No --> H(stop);
        C --> D[Test];
        D --> E{Passes tests?};
        E -- Yes --> G[Deploy];
        E -- No --> C;
        G --> H;
        ```

    === "Markdown"

        ````md
        ``` mermaid
        %%{init: {'theme': 'dark'}}%%
        graph LR

        A(Start) --> B{Error?};
        B -- Yes --> C[Debug];
        B -- No --> H(stop);
        C --> D[Test];
        D --> E{Passes tests?};
        E -- Yes --> G[Deploy];
        E -- No --> C;
        G --> H;
        ```
        ````

???+ example "Example: Quadrant chart"

    === "Content"

        ``` mermaid
        %%{init: {'theme': 'dark'}}%%

        quadrantChart
            title Rover components

            x-axis Low complexity --> High complexity
            y-axis Low priority --> High priority

            quadrant-1 Critical
            quadrant-2 To implement
            quadrant-3 Nice to have
            quadrant-4 To re-evaluate

            Component A: [0.7, 0.9]
            System B: [0.6, 0.3]
            Procedure X: [0.4, 0.6]
        ```

    === "Markdown"

        ````md
        ``` mermaid
        %%{init: {'theme': 'dark'}}%%

        quadrantChart
            title Rover components

            x-axis Low complexity --> High complexity
            y-axis Low priority --> High priority

            quadrant-1 Critical
            quadrant-2 To implement
            quadrant-3 Nice to have
            quadrant-4 To re-evaluate

            Component A: [0.7, 0.9]
            System B: [0.6, 0.3]
            Procedure X: [0.4, 0.6]
        ```
        ````

### File Button

The File Button creates a link to a downloadable file. This allows you to highlight documents available for download. By default, the file will be opened by the browser (if the browser supports this feature). If you want to force the file to be downloaded rather than opened, add the download attribute to the link.

???+ example

    === "Content"

        The component datasheet is available here: [[writing-user-manual.md]]{ file } or here (force download) [[writing-user-manual.md]]{ file download }

    === "Markdown"

        ````md
        The component datasheet is available here: [[writing-user-manual.md]]{ file } or here (force download) [[writing-user-manual.md]]{ file download }
        ````
