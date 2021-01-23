///// TEXTS /////
const textMedia = document.getElementById("textMedia");
/////////////////

function calculateMedia(
  cb2SM,
  cb4SM,
  inputSchoolMark1,
  inputSchoolMark2,
  inputSchoolMark3,
  inputSchoolMark4
) {
  let sumSchoolMarks = 0;
  let media = 0;

  if (cb2SM.checked == true && cb4SM.checked == false) {
    if (inputSchoolMark1.value == "" || inputSchoolMark2.value == "") {
      textMedia.textContent = "O valor de nota1-2 não pode ser vazio!";
      return 0;
    }

    sumSchoolMarks =
      parseFloat(inputSchoolMark1.value) + parseFloat(inputSchoolMark2.value);
    media = sumSchoolMarks / 2;
  } else if (cb4SM.checked == true && cb2SM.checked == false) {
    if (
      inputSchoolMark1.value == "" ||
      inputSchoolMark2.value == "" ||
      inputSchoolMark3.value == "" ||
      inputSchoolMark4.value == ""
    ) {
      textMedia.textContent = "O valor de nota1-4 não pode ser vazio!";
      return 0;
    }

    sumSchoolMarks =
      parseFloat(inputSchoolMark1.value) +
      parseFloat(inputSchoolMark2.value) +
      parseFloat(inputSchoolMark3.value) +
      parseFloat(inputSchoolMark4.value);
    media = sumSchoolMarks / 4;
  } else {
    media = 0;
  }

  textMedia.textContent = "Média: " + media;
}

export default calculateMedia;
