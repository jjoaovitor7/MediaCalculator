///// inputs /////
const inputSchoolMark1 = document.getElementById("sm1");
const inputSchoolMark2 = document.getElementById("sm2");
const inputSchoolMark3 = document.getElementById("sm3");
const inputSchoolMark4 = document.getElementById("sm4");
//////////////////


///// checkboxes /////
const chk2SM = document.getElementById("schoolmarks2");
const chk4SM = document.getElementById("schoolmarks4");
//////////////////////


///// botões /////
const btnCalculate = document.getElementById("btn-calculate");
//////////////////


///// textos /////
const textMedia = document.getElementById("textMedia");
//////////////////


function show2SchoolMarks() {
  inputSchoolMark1.style.display = "block";
  inputSchoolMark2.style.display = "block";
}


function hidden2SchoolMarks() {
  inputSchoolMark1.style.display = "none";
  inputSchoolMark2.style.display = "none";
}


function show4SchoolMarks() {
  inputSchoolMark1.style.display = "block";
  inputSchoolMark2.style.display = "block";
  inputSchoolMark3.style.display = "block";
  inputSchoolMark4.style.display = "block";
}


function hidden4SchoolMarks() {
  inputSchoolMark1.style.display = "none";
  inputSchoolMark2.style.display = "none";
  inputSchoolMark3.style.display = "none";
  inputSchoolMark4.style.display = "none";
}


hidden4SchoolMarks();


function SchoolMarks2Selected(e) {
  if (chk2SM.checked == true && chk4SM.checked == false) {
    show2SchoolMarks();
  }

  else if (chk2SM.checked == false && chk4SM.checked == false) {
    hidden2SchoolMarks();

  } else if (chk2SM.checked == false && chk4SM.checked == true) {
    // pass
  }
}


function SchoolMarks4Selected(e) {
  if (chk4SM.checked == true && chk2SM.checked == false) {
    show4SchoolMarks();
  }
  
  else if (chk4SM.checked == false && chk2SM.checked == false) {
    hidden4SchoolMarks();
  }
  
  else if (chk4SM.checked == false && chk2SM.checked == true) {
    // pass
  }
}


function calculateMedia() {
  let sumSchoolMarks = 0, media = 0;

  if (chk2SM.checked == true && chk4SM.checked == false) {
    if (inputSchoolMark1.value == "" ||
        inputSchoolMark2.value == ""
    ) {
        textMedia.textContent = "O valor de nota1-2 não pode ser vazio!";
        return;
    }
    
    sumSchoolMarks = parseFloat(inputSchoolMark1.value) + parseFloat(inputSchoolMark2.value);
    media = sumSchoolMarks / 2;
  }

  else if (chk4SM.checked == true && chk2SM.checked == false) {
    if (inputSchoolMark1.value == "" ||
        inputSchoolMark2.value == "" ||
        inputSchoolMark3.value == "" ||
        inputSchoolMark4.value == ""
    ) {
        textMedia.textContent = "O valor de nota1-4 não pode ser vazio!";
        return;
    }

    sumSchoolMarks =
    parseFloat(inputSchoolMark1.value) +
    parseFloat(inputSchoolMark2.value) +
    parseFloat(inputSchoolMark3.value) +
    parseFloat(inputSchoolMark4.value);
    media = sumSchoolMarks / 4;
  }

  else {
    media = 0;
  }

  textMedia.textContent = "Média: " + media;
}


///// checkboxes event /////
chk2SM.addEventListener("click", SchoolMarks2Selected);
chk4SM.addEventListener("click", SchoolMarks4Selected);
////////////////////////////


///// botões event /////
btnCalculate.addEventListener("click", calculateMedia);
////////////////////////
