export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import * as ProfileActions from './ProfileActions';
import * as SignInActions from './SignInActions';
import * as SubmitJobActions from './SubmitJobActions';
import * as SubmissionActions from './SubmissionActions';

//Import the sample data
import Data from '../instructions.json';

export function getData() {
  return (dispatch) => {

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = Data.instructions;
      dispatch({ type: DATA_AVAILABLE, data: data });
    }, 2000);

  };
}

const actions = {
  profileActions: ProfileActions,
  signInActions: SignInActions,
  submissionActions: SubmissionActions,
  submitJobActions: SubmitJobActions
};

export default actions;