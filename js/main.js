const inputSchoolMark1 = document.getElementById("sm1");
const inputSchoolMark2 = document.getElementById("sm2");
const inputSchoolMark3 = document.getElementById("sm3");
const inputSchoolMark4 = document.getElementById("sm4");

const chk2SM = document.getElementById("schoolmarks2");
const chk4SM = document.getElementById("schoolmarks4");

const btnSend = document.getElementById("btn-send");

const media = document.getElementById("media");

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

function SM2(e) {
  if (chk2SM.checked == true && chk4SM.checked == false) {
    show2SchoolMarks();
  } else if (chk2SM.checked == false && chk4SM.checked == false) {
    hidden2SchoolMarks();
  }
}

function SM4(e) {
  if (chk4SM.checked == true && chk2SM.checked == false) {
    show4SchoolMarks();
  } else if (chk4SM.checked == false && chk2SM.checked == false) {
    hidden4SchoolMarks();
  }
}

function calculateMedia() {
  let sumSchoolMarks =
    parseFloat(inputSchoolMark1.value) +
    parseFloat(inputSchoolMark2.value) +
    parseFloat(inputSchoolMark3.value) +
    parseFloat(inputSchoolMark4.value);

  let mediaResult = sumSchoolMarks / 4;

  media.textContent = "Média: " + mediaResult;
}

chk2SM.addEventListener("click", SM2);
chk4SM.addEventListener("click", SM4);

btnSend.addEventListener("click", calculateMedia);
