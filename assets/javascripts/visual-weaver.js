class VisualWeaver {
  constructor(textareaId) {
    this.textarea = document.getElementById(textareaId);
    this.toolbar = null;

    if (this.textarea) {
      this.extractToolbarConfig();
    } else {
      console.error(`Textarea with ID "${textareaId}" not found.`);
    }
  }

  extractToolbarConfig() {
    const content = this.textarea.value;

    const scriptContentMatch = content.match(/<script>([\s\S]*?)<\/script>/);

    if (scriptContentMatch && scriptContentMatch[1]) {
      try {
        eval(scriptContentMatch[1]);

        if (typeof toolbar !== "undefined") {
          this.toolbar = toolbar;
        } else {
          console.error("Toolbar object not found inside script.");
        }
      } catch (error) {
        console.error("Error evaluating script content:", error);
      }
    } else {
      console.error("No script tag found inside textarea.");
    }
  }

  getToolbarConfig = () => {
    return this.toolbar;
  };

  //   TOOLBAR SHOWS

  toolbars() {
    const config = this.getToolbarConfig();

    if (config.orientation === "horizontal") {
      const horizontal = config.orientation;
    }
  }
}
class TextFacess {
  // SELECTION
  selection = () => {
    return window.getSelection(); // Return the current selection object
  };

  // BOLD
  bold = () => {
    const boldIcon = document.getElementById("bold");
    const selection = this.selection(); // Get the current selection

    boldIcon.addEventListener("click", () => {
      // Toggle "pressed" class on the button based on selection
      this.togglePressedClass(boldIcon, "b");

      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0); // Get the selected range
        const selectedNode = range.startContainer;

        // Check if the selected range is already wrapped in a <span> with the class 'b'
        if (this.isFormatted(selectedNode, "b")) {
          // Unbold: remove the <span class="b"> wrapper
          this.removeStyle(range, "b");
        } else {
          // Apply bold: wrap the selected text with a <span class="b"> tag
          this.applyStyle(range, "b");
        }
      }
    });
  };

  // ITALIC
  italic = () => {
    const italicIcon = document.getElementById("italic");
    const selection = this.selection(); // Get the current selection

    italicIcon.addEventListener("click", () => {
      // Toggle "pressed" class on the button based on selection
      this.togglePressedClass(italicIcon, "i");

      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0); // Get the selected range
        const selectedNode = range.startContainer;

        // Check if the selected range is already wrapped in a <span class="i">
        if (this.isFormatted(selectedNode, "i")) {
          // Remove italic: remove the <span class="i"> wrapper
          this.removeStyle(range, "i");
        } else {
          // Apply italic: wrap the selected text with a <span class="i"> tag
          this.applyStyle(range, "i");
        }
      }
    });
  };

  // UNDERLINE
  underline = () => {
    const underlineIcon = document.getElementById("underline");
    const selection = this.selection(); // Get the current selection

    underlineIcon.addEventListener("click", () => {
      // Toggle "pressed" class on the button based on selection
      this.togglePressedClass(underlineIcon, "u");

      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0); // Get the selected range
        const selectedNode = range.startContainer;

        // Check if the selected range is already wrapped in a <span class="u">
        if (this.isFormatted(selectedNode, "u")) {
          // Remove underline: remove the <span class="u"> wrapper
          this.removeStyle(range, "u");
        } else {
          // Apply underline: wrap the selected text with a <span class="u"> tag
          this.applyStyle(range, "u");
        }
      }
    });
  };

  // Check if the selected node or its parent has the specified formatting class
  isFormatted = (node, className) => {
    if (node.nodeType === 3) {
      // Text node
      return node.parentNode && node.parentNode.classList.contains(className);
    } else {
      return node.classList.contains(className);
    }
  };

  // Apply style (e.g., bold, italic, underline) by wrapping the selected text with a <span>
  applyStyle = (range, className) => {
    const element = document.createElement("span");
    element.classList.add(className);
    range.surroundContents(element); // Wrap selected text with the <span> tag
  };

  // Remove style by unwrapping the specified class
  removeStyle = (range, className) => {
    const parentNode = range.startContainer.parentNode;

    if (parentNode && parentNode.classList.contains(className)) {
      const textNode = document.createTextNode(parentNode.textContent); // Create a text node
      parentNode.replaceWith(textNode); // Replace the <span> with the text node
    }
  };

  // Toggle "pressed" class based on the current selection
  togglePressedClass = (button, styleClass) => {
    const selection = this.selection(); // Get the current selection

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0); // Get the selected range
      const selectedNode = range.startContainer;

      // Check if the selected node or its parent has the class that corresponds to the style
      if (this.isFormatted(selectedNode, styleClass)) {
        // If the style is applied, add the "pressed" class to the button
        button.classList.add("pressed");
      } else {
        // If the style is not applied, remove the "pressed" class from the button
        button.classList.remove("pressed");
      }
    }
  };
}



// TOOLTIPS
function tooltips() {
  const buttons = document.querySelectorAll("[data-original-title]");

  buttons.forEach((button) => {
    let tooltip;

    button.addEventListener("mouseenter", (event) => {
      // Create tooltip
      tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.textContent = button.getAttribute("data-original-title");
      button.appendChild(tooltip);

      tooltip.classList.add("show");
    });

    button.addEventListener("mouseleave", () => {
      if (tooltip) {
        tooltip.classList.remove("show");
        setTimeout(() => tooltip.remove(), 200);
      }
    });
  });
}
// RESIZE
function resizer() {
  const editor = document.getElementById("editor-body");
  const resizerBeam = document.querySelector(".resizer-editor");

  let isResizing = false;
  let lastY = 0;

  resizerBeam.addEventListener("mousedown", (e) => {
    isResizing = true;
    lastY = e.clientY;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
  });

  function handleResize(e) {
    if (!isResizing) return;
    const offset = e.clientY - lastY;
    const newHeight = editor.offsetHeight + offset;
    editor.style.height = `${newHeight}px`;
    lastY = e.clientY;
  }

  function stopResize() {
    isResizing = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResize);
  }
}

// MODAL
function openModal(modalId) {
  document.getElementById(modalId).classList.add("active");
  document.getElementById("modal-overlay").classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
  document.getElementById("modal-overlay").classList.remove("active");
}

// FULL SCREEN
function fullscreen() {
  const container = document.querySelector(".visual-weaver");

  if (container) {
    container.classList.toggle("visual-weaver-fullscreen");

    if (container.classList.contains("visual-weaver-fullscreen")) {
      document.addEventListener("keydown", exitFullscreenOnEsc);
    } else {
      document.removeEventListener("keydown", exitFullscreenOnEsc);
    }
  }
}

// ESC Key to EXIT FULL SCREEN
function exitFullscreenOnEsc(event) {
  if (event.key === "Escape") {
    const container = document.querySelector(".visual-weaver");
    if (container && container.classList.contains("visual-weaver-fullscreen")) {
      container.classList.remove("visual-weaver-fullscreen");
      document.removeEventListener("keydown", exitFullscreenOnEsc);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const visualWeaver = new VisualWeaver("visual-weaver");
  visualWeaver.toolbars();
  tooltips();
  resizer();

});
