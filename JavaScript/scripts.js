//Pass the id of the <input> element to be copied as a parameter to the copy()
let copy = (texty) => {
    //Selects the text in the <input> elemet
    document.getElementById(texty).select();
    //Copies the selected text to clipboard
    document.execCommand("copy");
    alert("COPIADO BIEN COPIAO BIEN COPIAO");
};