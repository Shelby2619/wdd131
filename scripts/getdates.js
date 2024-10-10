const currentyear = document.getElementById("currentyear");
const today = new Date().getFullYear;
currentYearSpan.textContent = currentyear

const lastModifiedParagraph = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified; 
lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
