function calculateMedia(
  cb2SM,
  cb4SM,
  inputSchoolMark1,
  inputSchoolMark2,
  inputSchoolMark3,
  inputSchoolMark4,
  textMedia
) {
  let sumSchoolMarks = 0;
  let media = 0;

  if (cb2SM.checked && !cb4SM.checked) {
    if (inputSchoolMark1.value == "" || inputSchoolMark2.value == "") {
      textMedia.textContent = "O valor de nota1-2 não pode ser vazio!";
      return 0;
    }

    sumSchoolMarks =
      parseFloat(inputSchoolMark1.value) + parseFloat(inputSchoolMark2.value);
    media = sumSchoolMarks / 2;
    textMedia.textContent = "Média: " + media;
    return media;
  } else if (!cb2SM.checked && cb4SM.checked) {
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
    textMedia.textContent = "Média: " + media;
    return media;
  } else {
    media = 0;
    textMedia.textContent = "Média: " + media;
    return 0;
  }
}

export default calculateMedia;
