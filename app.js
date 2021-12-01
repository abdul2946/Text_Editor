// Home Secion

// Styling
const boldbtn = document.querySelector("#bold-btn");
const italicbtn = document.querySelector("#italic-btn");
const underlinebtn = document.querySelector("#underline-btn");
const strikebtn = document.querySelector("#strike-btn");
const quotebtn = document.querySelector("#quote-btn");
const paragraphbtn = document.querySelector("#paragraph-btn");
const superscriptbtn = document.querySelector("#superscript-btn");
const subscriptbtn = document.querySelector("#subscript-btn");

boldbtn.addEventListener("click", () => {
  document.execCommand("bold");
});
italicbtn.addEventListener("click", () => {
  document.execCommand("italic");
});
underlinebtn.addEventListener("click", () => {
  document.execCommand("underline");
});
strikebtn.addEventListener("click", () => {
  document.execCommand("strikeThrough");
});
quotebtn.addEventListener("click", () => {});
paragraphbtn.addEventListener("click", () => {
  document.execCommand("insertParagraph");
});
superscriptbtn.addEventListener("click", () => {
  document.execCommand("superscript");
});
subscriptbtn.addEventListener("click", () => {
  document.execCommand("subscript");
});

//list
const ulbtn = document.querySelector("#ul-btn");
const olbtn = document.querySelector("#ol-btn");

ulbtn.addEventListener("click", () => {
  document.execCommand("insertUnorderedList");
});
olbtn.addEventListener("click", () => {
  document.execCommand("insertOrderedList");
});

//Color
const frontcolorbtn = document.querySelector("#forcolor-btn");
const backcolorbtn = document.querySelector("#backcolor-btn");
frontcolorbtn.addEventListener("input", () => {
  document.execCommand("forecolor", false, frontcolorbtn.value);
});
backcolorbtn.addEventListener("input", () => {
  document.execCommand("backColor", false, backcolorbtn.value);
});

// Alignment
const alignLeft = document.querySelector("#justify-left");
const alignCenter = document.querySelector("#justify-center");
const alignRight = document.querySelector("#justify-right");
const alignFull = document.querySelector("#justify-full");
const outBtn = document.querySelector("#indent-left");
const inBtn = document.querySelector("#indent-right");

alignLeft.addEventListener("click", () => {
  document.execCommand("justifyLeft");
});
alignCenter.addEventListener("click", () => {
  document.execCommand("justifyCenter");
});
alignRight.addEventListener("click", () => {
  document.execCommand("justifyRight");
});
alignFull.addEventListener("click", () => {
  document.execCommand("justifyFull");
});
inBtn.addEventListener("click", () => {
  document.execCommand("indent");
});
outBtn.addEventListener("click", () => {
  document.execCommand("outdent");
});




// Edit Section
const cutbtn = document.querySelector("#cut-btn");
const copybtn = document.querySelector("#copy-btn");
const pestbtn = document.querySelector("#pest-btn");
const undobtn = document.querySelector("#undo-btn");
const redobtn = document.querySelector("#redo-btn");

cutbtn.addEventListener("click", () => {
  document.execCommand("cut");
});
copybtn.addEventListener("click", () => {
  document.execCommand("copy");
});
pestbtn.addEventListener("click", () => {
  document.execCommand("paste");
});
undobtn.addEventListener("click", () => {
  document.execCommand("undo");
});
redobtn.addEventListener("click", () => {
  document.execCommand("redo");
});



// Insert Section
const linkbtn = document.querySelector("#link-btn");
const imgbtn = document.querySelector("#img-btn");
const videobtn = document.querySelector("#video-btn");
const audiobtn = document.querySelector("#audio-btn");

linkbtn.addEventListener("click", () => {
  document.execCommand("createLink");
});
imgbtn.addEventListener("click", () => {
  document.execCommand("insertImage");
});