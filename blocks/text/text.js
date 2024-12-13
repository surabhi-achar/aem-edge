// Mock data for text component
const textComponentData = {
    id: "text",
    class: "text-component bold",
    content: "This is a dynamic text component."
  };
  
  // Render the text component
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".content-container");
  
    const textElement = document.createElement("div");
    textElement.id = textComponentData.id;
    textElement.className = textComponentData.class;
    textElement.textContent = textComponentData.content;
  
    container.appendChild(textElement);
  });
  