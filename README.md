# Taleem Presentation

`Taleem Presentation` is a library for creating `simple animated slides` and presentations for students, educators etc.

<span style="color: red;">**15-Jan-2025 =>  At the moment we are at version 0.8.X which is just suitable for testing and playing but not suitable for serious projects. Also the complete code of the library is not uploaded yet. Docs and Help files are being written. Examples are being written and THE CODE IS NOT FINALLY TESTED. Expected stable release (v1.0): by February 2025.**</span>

taleem-presentation library is hosted at https://taleem.vercel.app/:

---

<a href='https://taleem.vercel.app/'>
<img src='https://taleem.vercel.app/app-deployed-pic.png' alt='app-deployed-pic.png'>
</a>

<span style="color: red;">The library is under heavy development and the code is being changed on regular basis.</span> 

## Taleem Presentation library in Brief:

    1. The presentation is a javascript `.js` file. It is text based and can be opened in any text editor and edited manually.

    2. The library is based on sveltkit.
    
    3. The library exports 2 main components `Editor` and `Player`. The `Editor` is for editing presentations and the `Player` is for playing the presentations.

    4. The main concept is that we create slides (currently we have `Canvas` and `Eqs` slide types). Once the slides are created we give them startTime and endTime respectively such that they run one after another in sequence.

    5: Canvas slides allow creating drawing canvas with shapes, images, sprites and built-in assets. Eqs slides are designed for educational content with equations, text, and timed reveals.

    6: The library can load `sound` using URL from any online/hosted source or using sound files converted into `hexadecimal`.

    7: Slides Timings:
        - Slides run one after another in sequence given to them according to their start and end time.
        - If there is some error in the timing that will be indicated by the `Editor` as `timing error`.
        - Inside slides you also have items and each has its own start and end time.

    8: The Presentation is designed to run as a `video` and not as a slide show.      

    9: I intend to create a small youtube video series on this library after i have reached version # 1

    10: Taleem-Presentation is a lightweight Svelte-based library designed to create and run simple JavaScript/JSON-based presentations.

---

## Installation

Install the library via npm:

```bash
npm i taleem-presentation
```

---

## Hosted Editor

<a href="https://taleem.vercel.app/editor">
<img src='https://taleem.vercel.app/editor.png' alt='editor.png'>
</a>


## Hosted Player

<a href="https://taleem.vercel.app/player">
<img src='https://taleem.vercel.app/player.png' alt='player.png'>
</a>


## Usage

### 1. Using the `Editor` Component
The `Editor` component allows users to create or edit slides interactively.The user can just use the online Editor (link is given above).

#### Example:
```svelte
<script>
  import {Editor} from 'taleem-presentation';
  ////////////////////////////////////////////
    let slides=[];
    let showToolbar=true;
</script>

<div class="w-full bg-gray-800">
  {#if slides}
    <Editor
      isBlob={true}
      {showToolbar}
      bind:slides={slides}
    />
  {/if}
</div>
```

#### Props:
- `items`: Array of objects defining the slide content
- `slideExtra`: Additional slide configuration data
- `showAddToolbar`: (Optional) Boolean to toggle the addition toolbar (default: `true`)

---

### 2. Using the `Player` Component
The `Player` component displays slides interactively. It supports various events and lifecycle hooks for customization.

#### Example:
```svelte

<script>
    import {Player} from 'taleem-presentation';
    import {Slides} from "./Slides";
// Replace Slides with your own slides.
let slides = Slides;

</script> 

<div class='bg-gray-800 text-white w-full' >
  {#if slides}
    <div class="flex justify-center w-full   border-white border-2 text-center  rounded-lg  ">
      {#key slides}
          <Player
            isBlob = {false}
            slides={slides} 
            audioData= "/music1.opus"    
          />
      {/key}
    </div>
  {/if}
</div>
    
```

#### Props:
- `items`: Array of objects defining the slide content
- `slideExtra`: Additional slide configuration data
- Event Hooks (Optional):
  - `postDraw`: Function executed after drawing
  - `eventMouseDown`: Function triggered on mouse down
  - `eventMouseUp`: Function triggered on mouse up
  - `eventDblClick`: Function triggered on double click
  - `eventMouseMove`: Function triggered on mouse move

## Supported Slide Types
1. **Canvas Slide**:
   - For creating graphical content with shapes, images, and sprites
   - Built-in support for system images and sprites
   - Supports drawing commands like `text`, `image`, `rect`

2. **Eqs (Equations) Slide**:
   - Designed for educational content and mathematical explanations
   - Supports headings, code blocks, text content, and equations
   - Features timed content reveal

## Roadmap
- Add support for new slide types
- Enhance animation and interactivity features
- Improve documentation and examples

## License
MIT © 2024 Bilal Tariq