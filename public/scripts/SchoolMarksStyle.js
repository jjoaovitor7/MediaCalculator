class SchoolMarksStyle {
  setStyleToBlock(elem) {
    elem.style.display = "block";
  }

  setStyleToNone(elem) {
    elem.style.display = "none";
  }

  show2SchoolMarks(inputSchoolMark1, inputSchoolMark2) {
    this.setStyleToBlock(inputSchoolMark1);
    this.setStyleToBlock(inputSchoolMark2);
  }

  hidden2SchoolMarks(inputSchoolMark1, inputSchoolMark2) {
    this.setStyleToNone(inputSchoolMark1);
    this.setStyleToNone(inputSchoolMark2);
  }

  show4SchoolMarks(
    inputSchoolMark1,
    inputSchoolMark2,
    inputSchoolMark3,
    inputSchoolMark4
  ) {
    this.setStyleToBlock(inputSchoolMark1);
    this.setStyleToBlock(inputSchoolMark2);
    this.setStyleToBlock(inputSchoolMark3);
    this.setStyleToBlock(inputSchoolMark4);
  }

  hidden4SchoolMarks(
    inputSchoolMark1,
    inputSchoolMark2,
    inputSchoolMark3,
    inputSchoolMark4
  ) {
    this.setStyleToNone(inputSchoolMark1);
    this.setStyleToNone(inputSchoolMark2);
    this.setStyleToNone(inputSchoolMark3);
    this.setStyleToNone(inputSchoolMark4);
  }
}

export default SchoolMarksStyle;
