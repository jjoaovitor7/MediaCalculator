///// INPUTS /////
const inputSchoolMark1 = document.getElementById("sm1");
const inputSchoolMark2 = document.getElementById("sm2");
const inputSchoolMark3 = document.getElementById("sm3");
const inputSchoolMark4 = document.getElementById("sm4");
//////////////////

///// CHECKBOXES /////
const cb2SM = document.getElementById("schoolmarks2");
const cb4SM = document.getElementById("schoolmarks4");
//////////////////////

///// BUTTONS /////
const btnCalculate = document.getElementById("btn-calculate");
//////////////////

///// SCHOOLMARKSSTYLE /////
import SchoolMarksStyle from "./SchoolMarksStyle.js";
const SchoolMarksStyleInstance = new SchoolMarksStyle();
SchoolMarksStyleInstance.hidden4SchoolMarks(
  inputSchoolMark1,
  inputSchoolMark2,
  inputSchoolMark3,
  inputSchoolMark4
);
////////////////////////////

function SchoolMarks2Selected() {
  if (cb2SM.checked && !cb4SM.checked) {
    SchoolMarksStyleInstance.show2SchoolMarks(
      inputSchoolMark1,
      inputSchoolMark2
    );
  } else if (!cb2SM.checked && !cb4SM.checked) {
    SchoolMarksStyleInstance.hidden2SchoolMarks(
      inputSchoolMark1,
      inputSchoolMark2
    );
  } else if (!cb2SM.checked && cb4SM.checked) {
    return 0;
  }
}

function SchoolMarks4Selected() {
  if (cb4SM.checked && !cb2SM.checked) {
    SchoolMarksStyleInstance.show4SchoolMarks(
      inputSchoolMark1,
      inputSchoolMark2,
      inputSchoolMark3,
      inputSchoolMark4
    );
  } else if (!cb4SM.checked && !cb2SM.checked) {
    SchoolMarksStyleInstance.hidden4SchoolMarks(
      inputSchoolMark1,
      inputSchoolMark2,
      inputSchoolMark3,
      inputSchoolMark4
    );
  } else if (!cb4SM.checked && cb2SM.checked) {
    return 0;
  }
}

///// CALCULATE MEDIA /////
import calculateMedia from "./calculateMedia.js";
function _calculateMedia() {
  calculateMedia(
    cb2SM,
    cb4SM,
    inputSchoolMark1,
    inputSchoolMark2,
    inputSchoolMark3,
    inputSchoolMark4
  );
}
///////////////////////////

///// CHECKBOXES EVENT /////
cb2SM.addEventListener("click", SchoolMarks2Selected);
cb4SM.addEventListener("click", SchoolMarks4Selected);
////////////////////////////

///// BUTTON EVENT /////
btnCalculate.addEventListener("click", _calculateMedia);
////////////////////////
