import moment from "moment";

export function currentDateTo_YYYY_MM_DD() {
  return moment(new Date()).format("YYYY-MM-DD");
}

export function convertStringToDate_YYYY_MM_DD(stringDate) {
  if (stringDate === undefined || stringDate === null || stringDate === "") {
    return moment(new Date()).format("YYYY-MM-DD");
  }
  return moment(stringDate).format("YYYY-MM-DD");
}

export function removeStringToNumber(input) {
  return input.replace(/[^0-9]/g, "");
}
