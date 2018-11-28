export const JOB_TITLE = 'JOB_TITLE';
export const SELECTED_LARBOR_CATEGORY = 'SELECTED_LARBOR_CATEGORY';
export const SELECTED_LOCATION = 'SELECT_LOCATION';
export const SELECTED_SHIFT = 'SELECTED_SHIFT';
export const SELECTED_QUANTITY = 'SELECTED_QUANTITY';
export const SELECTED_START_DATE = 'SELECTED_START_DATE';
export const JOB_NOTES = 'JOB_NOTES';
export const SUBMIT_JOB = 'SUBMIT_JOB';
export const CANCEL_EDIT = 'CANCEL_EDIT';
export const EDIT_JOB = 'EDIT_JOB';

export function selectLaborCategory(selectedLaborCategory) {
  return (dispatch) => {
    dispatch({
      type: SELECTED_LARBOR_CATEGORY,
      selectedLaborCategory: selectedLaborCategory
    });
  };
}

export function selectLocation(selectedLocation) {
  return (dispatch) => {
    dispatch({
      type: SELECTED_LOCATION,
      selectedLocation: selectedLocation
    });
  };
}

export function selectShift(selectedShift) {
  return (dispatch) => {
    dispatch({
      type: SELECTED_SHIFT,
      selectedShift: selectedShift
    });
  };
}

export function selectQuantity(selectedQuantity) {
  return (dispatch) => {
    dispatch({
      type: SELECTED_QUANTITY,
      selectedQuantity: selectedQuantity
    });
  };
}

export function selectStartDate(selectedStartDate) {
  return (dispatch) => {
    dispatch({
      type: SELECTED_START_DATE,
      selectedStartDate: selectedStartDate
    });
  };
}

export function setJobNotes(jobNotes) {
  return (dispatch) => {
    dispatch({
      type: JOB_NOTES,
      jobNotes: jobNotes
    });
  };
}

export function setJobTitle(jobTitle) {
  return (dispatch) => {
    dispatch({
      type: JOB_TITLE,
      jobTitle: jobTitle
    });
  };
}

export function submitJob(newJob) {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_JOB,
      newJob: newJob
    });
  };
}

export function cancelEdit() {
  return (dispatch) => {
    dispatch({
      type: CANCEL_EDIT
    })
  }
}

export function editJob(jobKey) {
  return (dispatch) => {
    dispatch({
      type: EDIT_JOB,
      jobKey: jobKey
    })
  }
}