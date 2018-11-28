import { combineReducers } from 'redux';

import * as ProfileActions from '../actions/ProfileActions';
import * as SignInActions from '../actions/SignInActions';
import * as SubmitJobActions from '../actions/SubmitJobActions';
import * as SubmissionActions from '../actions/SubmissionActions';

const markedDateStyle = { selected: true, selectedColor: '#0C6360' }
let submissionCounter = 0;

let globalState = {
  userId: -1,
  username: ''
}

let signInState = {
  username: '',
  password: ''
};

let submissionsState = {
  userSubmissions: [
    {
      key: '-1',
      notes: '3 years experience',
      laborCategory: 'Travel nurse',
      location: 'Florida',
      quantity: '1',
      shift: 'Morning',
      startDate: '2018-09-25',
      jobTitle: 'Travel Nurse - Florida Hospital'
    }
  ]
};

// TODO figure out a better default value for key
let submitJobState = {
  jobKey: '-42',
  isEditJob: false,
  currentDate: new Date(),
  jobTitle: '',
  selectedLocation: '',
  selectedLaborCategory: '',
  selectedShift: '',
  selectedQuantity: '',
  selectedStartDate: '',
  notes: '',
  markedDate: {},
  locations: [
    {
      label: 'Daytona Beach',
      value: 'Daytona Beach'
    },
    {
      label: 'Gainesville',
      value: 'Gainesville'
    },
    {
      label: 'Miami',
      value: 'Miami'
    },
    {
      label: 'Palm Beach',
      value: 'Palm Beach'
    },
    {
      label: 'Akron',
      value: 'Akron'
    },
    {
      label: 'Canton',
      value: 'Canton'
    },
    {
      label: 'Cincinnati',
      value: 'Cincinnati'
    },
    {
      label: 'Cincinnati - North',
      value: 'Cincinnati - North'
    },
    {
      label: 'Southeast OH - Zanesville',
      value: 'Southeast OH - Zanesville'
    },
    {
      label: 'Northen Kentucky',
      value: 'Northen Kentucky'
    },
    {
      label: 'Lexington',
      value: 'Lexington'
    },
    {
      label: 'Knoxville',
      value: 'Knoxville'
    },
    {
      label: 'North Knoxville',
      value: 'North Knoxville'
    },
    {
      label: 'Tri-Cities',
      value: 'Tri-Cities'
    },
    {
      label: 'Muskegon',
      value: 'Muskegon'
    },
    {
      label: 'Spectrum Health',
      value: 'Spectrum Health'
    },
    {
      label: 'Minneapolis',
      value: 'Minneapolis'
    },
    {
      label: 'Town and Country (MOBAP) - January',
      value: 'Town and Country (MOBAP) - January'
    },
    {
      label: 'Springfield',
      value: 'Springfield'
    },
    {
      label: 'St. Louis',
      value: 'St. Louis'
    },
    {
      label: 'Memphis',
      value: 'Memphis'
    },
    {
      label: 'Hampton Roads (Riverside)',
      value: 'Hampton Roads (Riverside)'
    },
    {
      label: 'Milwaukee - St. Francis',
      value: 'Milwaukee - St. Francis'
    },
    {
      label: 'Milwaukee - West Allis',
      value: 'Milwaukee - West Allis'
    },
    {
      label: 'Madison',
      value: 'Madison'
    },
    {
      label: 'Camp Hill',
      value: 'Camp Hill'
    },
    {
      label: 'Harrisburg',
      value: 'Harrisburg'
    },
    {
      label: 'York',
      value: 'York'
    },
    {
      label: 'NW Indiana',
      value: 'NW Indiana'
    },
    {
      label: 'Porter',
      value: 'Porter'
    },
    {
      label: 'Ann Arbor',
      value: 'Ann Arbor'
    },
    {
      label: 'Toledo',
      value: 'Toledo'
    },
    {
      label: 'Downriver',
      value: 'Downriver'
    },
    {
      label: 'Northwest Detroit',
      value: 'Northwest Detroit'
    },
    {
      label: 'Cleveland East',
      value: 'Cleveland East'
    },
    {
      label: 'Cleveland West',
      value: 'Cleveland West'
    },
    {
      label: 'Columbus East',
      value: 'Columbus East'
    },
    {
      label: 'Columbus West',
      value: 'Columbus West'
    },
    {
      label: 'Columbus South',
      value: 'Columbus South'
    },
    {
      label: 'Columbus Vic Vil',
      value: 'Columbus Vic Vil'
    },
    {
      label: 'Columbus Mt. Carmel',
      value: 'Columbus Mt. Carmel'
    },
    {
      label: 'Youngstown-Boardman',
      value: 'Youngstown-Boardman'
    },
    {
      label: 'Youngstown-Warren',
      value: 'Youngstown-Warren'
    },
    {
      label: 'Youngstown',
      value: 'Youngstown'
    },
    {
      label: 'Erie',
      value: 'Erie'
    },
    {
      label: 'Battle Creek',
      value: 'Battle Creek'
    },
    {
      label: 'Flint',
      value: 'Flint'
    },
    {
      label: 'Grosse Pointe',
      value: 'Grosse Pointe'
    },
    {
      label: 'Macomb',
      value: 'Macomb'
    },
    {
      label: 'Pontiac',
      value: 'Pontiac'
    },
    {
      label: 'Saginaw',
      value: 'Saginaw'
    },
    {
      label: 'Phoenix',
      value: 'Phoenix'
    },
    {
      label: 'Phoenix Downtown',
      value: 'Phoenix Downtown'
    },
    {
      label: 'Des Moines',
      value: 'Des Moines'
    },
    {
      label: 'Quad Cities',
      value: 'Quad Cities'
    },
    {
      label: 'Kansas City',
      value: 'Kansas City'
    },
    {
      label: 'Wichita',
      value: 'Wichita'
    },
    {
      label: 'Lincoln',
      value: 'Lincoln'
    },
    {
      label: 'Omaha',
      value: 'Omaha'
    },
    {
      label: 'Oklahoma City',
      value: 'Oklahoma City'
    },
    {
      label: 'Tulsa',
      value: 'Tulsa'
    },
    {
      label: 'South Dakota',
      value: 'South Dakota'
    },
    {
      label: 'Evansville',
      value: 'Evansville'
    },
    {
      label: 'Wilmington',
      value: 'Wilmington'
    },
    {
      label: 'Augusta',
      value: 'Augusta'
    },
    {
      label: 'Durham',
      value: 'Durham'
    },
    {
      label: 'Greensboro',
      value: 'Greensboro'
    },
    {
      label: 'NE New Jersey',
      value: 'NE New Jersey'
    },
    {
      label: 'Danville',
      value: 'Danville'
    },
    {
      label: 'Johnstown',
      value: 'Johnstown'
    },
    {
      label: 'Laurel Highlands',
      value: 'Laurel Highlands'
    },
    {
      label: 'McKeesport',
      value: 'McKeesport'
    },
    {
      label: 'Pittsburgh-UPMC',
      value: 'Pittsburgh-UPMC'
    },
    {
      label: 'Greenville',
      value: 'Greenville'
    },
    {
      label: 'Nashville',
      value: 'Nashville'
    },
    {
      label: 'Charleston',
      value: 'Charleston'
    },
    {
      label: 'Fort Smith',
      value: 'Fort Smith'
    },
    {
      label: 'Springdale',
      value: 'Springdale'
    },
    {
      label: 'Orlando North',
      value: 'Orlando North'
    },
    {
      label: 'Orlando South',
      value: 'Orlando South'
    },
    {
      label: 'Atlanta Midtown',
      value: 'Atlanta Midtown'
    },
    {
      label: 'South Atlanta',
      value: 'South Atlanta'
    },
    {
      label: 'Macon',
      value: 'Macon'
    },
    {
      label: 'Savannah',
      value: 'Savannah'
    },
    {
      label: 'Dallas-Downtown',
      value: 'Dallas-Downtown'
    },
    {
      label: 'Dallas',
      value: 'Dallas'
    },
    {
      label: 'Cleveland Fairhill',
      value: 'Cleveland Fairhill'
    },
    {
      label: 'Cleveland Gateway',
      value: 'Cleveland Gateway'
    },
    {
      label: 'Florence',
      value: 'Florence'
    },
    {
      label: 'Longview',
      value: 'Longview'
    },
    {
      label: 'Birmingham',
      value: 'Birmingham'
    },
    {
      label: 'Pensacola',
      value: 'Pensacola'
    },{
      label: 'Tallahassee',
      value: 'Tallahassee'
    },
    {
      label: 'Hattiesburg',
      value: 'Hattiesburg'
    },
    {
      label: 'Meridian',
      value: 'Meridian'
    },
    {
      label: 'Gulfport',
      value: 'Gulfport'
    },
    {
      label: 'Jackson',
      value: 'Jackson'
    },
    {
      label: 'Belhaven',
      value: 'Belhaven'
    }
  ],
  laborCategories: [
    {
      label: 'Certified Nurse Assistants',
      value: 'Certified Nurse Assistants'
    },
    {
      label: 'Registered Respiratory Therapist',
      value: 'Registered Respiratory Therapist'
    },
    {
      label: 'Clinical Dietitian',
      value: 'Clinical Dietitian'
    },
    {
      label: 'Physical Therapist',
      value: 'Physical Therapist'
    },
    {
      label: 'Occupational Therapist',
      value: 'Occupational Therapist'
    },
    {
      label: 'Certified Hand Therapist',
      value: 'Certified Hand Therapist'
    },
    {
      label: 'Speech Language Pathologist',
      value: 'Speech Language Pathologist'
    },
    {
      label: 'Physical Therapist Assistant',
      value: 'Physical Therapist Assistant'
    },
    {
      label: 'COTA',
      value: 'COTA'
    },
    {
      label: 'Pharmacy Technician',
      value: 'Pharmacy Technician'
    },
    {
      label: 'Radiology Technician',
      value: 'Radiology Technician'
    },
    {
      label: 'Telemetry Technicians (EKG)',
      value: 'Telemetry Technicians (EKG)'
    },
    {
      label: 'Pharmacist',
      value: 'Pharmacist'
    },
    {
      label: 'Unit Secretary',
      value: 'Unit Secretary'
    },
    {
      label: 'Rehabilitation RN (Adult)',
      value: 'Rehabilitation RN (Adult)'
    },
    {
      label: 'Rehabilitation RN (Pediatric)',
      value: 'Rehabilitation RN (Pediatric)'
    },
    {
      label: 'Acute Care RN (non-specialty)',
      value: 'Acute Care RN (non-specialty)'
    },
    {
      label: 'Acute Care RN (specialty)',
      value: 'Acute Care RN (specialty)'
    },
    {
      label: 'Clinical Nurse Manager',
      value: 'Clinical Nurse Manager'
    },
    {
      label: 'Acute Care: RN Case Manager',
      value: 'Acute Care: RN Case Manager'
    },
    {
      label: 'Senior Clinical Nurse Manager',
      value: 'Senior Clinical Nurse Manager'
    }
  ],
  shifts: [
    {
      label: 'Day',
      value: 'Day'
    },
    {
      label: 'Night',
      value: 'Night'
    }
  ]
};

let profileState = {
  password: '',
  confirmPassword: ''
}

const globalReducer = (state = globalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const submitJobReducer = (state = submitJobState, action) => {
  switch (action.type) {
    case SubmitJobActions.EDIT_JOB:
      let key = action.jobKey;
      let submissions = submissionsState.userSubmissions;
      let job = submissions.find(function (obj) { return obj.key === key; });

      state = {
        ...state,
        jobKey: key,
        isEditJob: true,
        jobTitle: job.jobTitle,
        selectedLocation: job.location,
        selectedLaborCategory: job.laborCategory,
        selectedShift: job.shift,
        selectedQuantity: job.quantity,
        selectedStartDate: job.startDate,
        notes: job.notes,
        markedDate: { [job.startDate]: markedDateStyle },
      };
      return state;
    case SubmitJobActions.CANCEL_EDIT:
      state = resetSubmitJobOptions(state);
      return state;
    case SubmitJobActions.JOB_TITLE:
      state = {
        ...state,
        jobTitle: action.jobTitle
      };
      return state;
    case SubmitJobActions.SELECTED_LARBOR_CATEGORY:
      state = {
        ...state,
        selectedLaborCategory: action.selectedLaborCategory
      };
      return state;
    case SubmitJobActions.SELECTED_LOCATION:
      state = {
        ...state,
        selectedLocation: action.selectedLocation
      };
      return state;
    case SubmitJobActions.SELECTED_SHIFT:
      state = {
        ...state,
        selectedShift: action.selectedShift
      };
      return state;
    case SubmitJobActions.SELECTED_QUANTITY:
      state = {
        ...state,
        selectedQuantity: action.selectedQuantity
      };
      return state;
    case SubmitJobActions.SELECTED_START_DATE:
      let dateTimeStamp = action.selectedStartDate
      let date = { [dateTimeStamp]: markedDateStyle };

      state = {
        ...state,
        selectedStartDate: dateTimeStamp,
        markedDate: date,
        currentDate: dateTimeStamp
      };
      return state;
    case SubmitJobActions.JOB_NOTES:
      state = {
        ...state,
        notes: action.jobNotes
      };
      return state;
    case SubmitJobActions.SUBMIT_JOB:
      // Send object to Submission's state.
      submitJob(action.newJob);

      // Reset State
      state = resetSubmitJobOptions(state);

      return state;
    default:
      return state;
  }
};

const submissionsReducer = (state = submissionsState, action) => {
  switch (action.type) {
    case SubmissionActions.GET_SUBMISSIONS:
      // TODO figure out how to retrieve submissions from a server.
      return state;
    case SubmissionActions.REFRESH_SUBMISSION_LIST:
      state = {
        ...state,
        refreshData: action.shouldRefresh
      };
      return state;
    default:
      return state;
  }
};

const signInReducer = (state = signInState, action) => {
  switch (action.type) {
    case SignInActions.SET_USERNAME:
      state = {
        ...state,
        username: action.username
      };
      return state;
    case SignInActions.SET_PASSWORD:
      state = {
        ...state,
        password: action.password
      };
      return state;
    case SignInActions.SIGN_IN:
      // TODO verify user has correct credentials.
      state = resetSignInFields(state);
      return state;
    default:
      return state;
  }
};

const profileReducer = (state = profileState, action) => {
  switch (action.type) {
    case ProfileActions.SET_PASSWORD_INPUT:
      state = {
        ...state,
        password: action.password
      };
      return state;
    case ProfileActions.SET_CONFIRM_PASSWORD_INPUT:
      state = {
        ...state,
        confirmPassword: action.confirmPassword
      };
      return state;
    case ProfileActions.CHANGE_PASSWORD:
      // TODO get passwords from current state before resetting.
      return resetPasswordFields(state);
    case ProfileActions.SIGNED_OUT_PROFILE:
      state = resetPasswordFields(state);
      return state;
    default:
      return state;
  }
};

function submitJob(newJob) {
  let submissions = submissionsState.userSubmissions;
  let jobExists = submissions.find(function (obj) { return obj.key === newJob.key; });

  if (jobExists) {
    let updatedSubmissions = submissions.map(job => {
      if (job.key == newJob.key)
        return newJob;
      return job;
    });

    submissionsState.userSubmissions = [...updatedSubmissions];
  } else {
    let id = '' + submissionCounter++;

    newJob = {
      key: id,
      ...newJob
    };

    submissionsState.userSubmissions = [newJob, ...submissionsState.userSubmissions];
  }
}

function resetSubmitJobOptions(state) {
  // Reset state
  let resetState = {
    ...state,
    notes: '',
    selectedLaborCategory: '',
    selectedLocation: '',
    selectedQuantity: '',
    selectedShift: '',
    selectedStartDate: '',
    jobTitle: '',
    markedDate: {},
    currentDate: new Date(),
    isEditJob: false
  };

  return resetState;
}

function resetPasswordFields(state) {
  state = {
    ...state,
    password: '',
    confirmPassword: '',
  };

  return state;
}

function resetSignInFields(state) {
  state = {
    ...state,
    username: '',
    password: ''
  }

  return state;
}

// Combine all the reducers
const rootReducer = combineReducers({
  globalReducer,
  profileReducer,
  signInReducer,
  submissionsReducer,
  submitJobReducer
});

export default rootReducer;