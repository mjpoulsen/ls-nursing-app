export const NEW_JOB = 'NEW_JOB';
export const GET_SUBMISSIONS = 'GET_SUBMISSIONS';
export const REFRESH_SUBMISSION_LIST = 'REFRESH_SUBMISSION_LIST';

export function getSubmissions() {
  return (dispatch) => {
    dispatch({
      type: GET_SUBMISSIONS
    });
  };
}