<script>
  import './Tiptap.css'
  import { onMount, onDestroy } from 'svelte'
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import Document from '@tiptap/extension-document'
  import Paragraph from '@tiptap/extension-paragraph'
  import Text from '@tiptap/extension-text'
  import Heading from '@tiptap/extension-heading'
  import Italic from '@tiptap/extension-italic'
  import Bold from '@tiptap/extension-bold'
  import Link from '@tiptap/extension-link'
  import Underline from '@tiptap/extension-underline'
  import Strike from '@tiptap/extension-strike'
  import OrderedList from '@tiptap/extension-ordered-list'
  import BulletList from '@tiptap/extension-bullet-list'
  import ListItem from '@tiptap/extension-list-item'
  import TextAlign from '@tiptap/extension-text-align'
  
  let element
  let editor
  export let content;

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [
          Document,
          Paragraph,
          Text,
          Italic,
          Heading,
          Bold,
          Link,
          Underline,
          Strike,
          ListItem,
          OrderedList,
          BulletList,
          TextAlign.configure({
              types: ['heading', 'paragraph'],
          }),
      ],
      content
    })
  })
  const setLink=()=>{
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }
  const changeTextSize = () =>{
    console.log("Dd");
    
    const selectBox = document.getElementsByClassName("form-select")
    const selectedIndex = selectBox[0].options.selectedIndex

    console.log(element.children[0].innerHTML);
    
    if(selectedIndex === 0){
        editor.chain().focus().setParagraph().run()
    }
    else if(selectedIndex === 1){
        editor.chain().focus().toggleHeading({ level: 1}).run()
    }
    else if(selectedIndex === 2){

        editor.chain().focus().toggleHeading({ level: 2}).run()
    }
    else if(selectedIndex === 3){

        editor.chain().focus().toggleHeading({ level: 3}).run()
    }

  }
  
  
    onDestroy(() => {
      if (editor) {
        editor.destroy()
      }
    })
  </script>
  
  {#if editor}
  <div style="display:flex;background-color: rgb(248, 248, 248);margin-top:1em;" class="p-2">
  <select class="form-select" aria-label="Default select example" on:change={changeTextSize} style="width:fit-content">
    <option selected>Paragraph</option>
    <option value="1"  on:click={() => console.log("ff")}>Heading 1</option>
    <option value="2">Heading 2</option>
    <option value="3">Heading 3</option>
  </select>
    <button class="editor-icon" on:click={()=>{editor.chain().focus().toggleBold().run();console.log(editor.isActive('bold')) }} class:hidden={editor.isActive('bold') ? 'active' : ''}>
        <img src="/Editor Icons/bold.png" alt="bold" width="20"/>
    </button>
    <button class="editor-icon" on:click={()=>{editor.chain().focus().toggleItalic().run(); }} >
        <img src="/Editor Icons/italic.png" alt="italic" width="20"/>
    </button>
    <button class="editor-icon" on:click={()=>{
        if(!editor.isActive("link")){
            editor.chain().focus().setLink().run();
            setLink()
        }
        else{
            editor.chain().focus().unsetLink().run();
        }
    }}>
        <img src="/Editor Icons/link.png" alt="link" width="20"/>
    </button>
    <button class="editor-icon" on:click={ editor.chain().focus().toggleUnderline().run()}>
        <img src="/Editor Icons/underline.png" alt="underline" width="20"/>
    </button>
    <button class="editor-icon"  on:click={()=>{ editor.chain().focus().toggleStrike().run();console.log(editor.chain().focus())}} >
        <img src="/Editor Icons/strikethrough.png" alt="strike-through" width="20"/>
    </button>
    <button class="editor-icon" on:click={()=>{editor.chain().focus().toggleOrderedList().run()}}>
        <img src="/Editor Icons/numberedlist.png" alt="numberedlist" width="20"/>
    </button>
    <button on:click={() => editor.chain().focus().toggleBulletList().run()} class="editor-icon"  >
        <img src="/Editor Icons/bulletlist.png" alt="bulletlist" width="20"/>
    </button>
    <button on:click={() => editor.chain().focus().setTextAlign("left").run()} class="editor-icon"  >
        <img src="/Editor Icons/left-align.png" alt="left-align" width="20"/>
    </button>
    <button on:click={() => editor.chain().focus().setTextAlign("center").run()} class="editor-icon"  >
        <img src="/Editor Icons/center-align.png" alt="center-align" width="20"/>
    </button>
    <button on:click={() => editor.chain().focus().setTextAlign("right").run()} class="editor-icon"  >
        <img src="/Editor Icons/right-align.png" alt="right-align" width="20"/>
    </button>
    
</div>
  {/if}
  
  <div bind:this={element} class="editor" />
  
