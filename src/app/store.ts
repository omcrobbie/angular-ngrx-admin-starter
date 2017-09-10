import { createSelector } from 'reselect';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromLogin from './containers/login/state/login.reducer';
import * as fromMessages from './containers/messages/state/messages.reducer';

export interface State {
  login: fromLogin.State;
  router: fromRouter.RouterState;
  messages: fromMessages.State;
}

const reducers = {
  login: fromLogin.reducer,
  router: fromRouter.routerReducer,
  messages: fromMessages.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {
  return developmentReducer(state, action);
}

/*
 * States
 *
 */
export const getLoginState = (state: State) => state.login;
export const getMessagesState = (state: State) => state.messages;

/*
 * Selectors: Documents
 *
 */

// export const getDocuments = createSelector(getDocumentState, fromDocuments.getDocuments);
// export const getDocumentsLoading = createSelector(getDocumentState, fromDocuments.getDocumentsLoading);
// export const getDocumentsLoaded = createSelector(getDocumentState, fromDocuments.getDocumentsLoaded);
// export const getDocumentsUploaded = createSelector(getDocumentState, fromDocuments.getDocumentsUploaded);
// export const getDocumentsUploading = createSelector(getDocumentState, fromDocuments.getDocumentsUploading);

// /*
//  * Selectors: Jobs
//  *
//  */

// export const getJobs = createSelector(getJobsState, fromJobs.getJobs);
// export const getJobsLoading = createSelector(getJobsState, fromJobs.getJobsLoading);
// export const getJobsLoaded = createSelector(getJobsState, fromJobs.getJobsLoaded);
// export const getJobsCount = createSelector(getJobsState, fromJobs.getJobsCount);

// /*
//  * Selectors: Jobs
//  *
//  */

export const getLoginLoading = createSelector(getLoginState, fromLogin.loginLoading);
export const getLoginLoggedIn = createSelector(getLoginState, fromLogin.loginLoggedIn);
export const getLoginError = createSelector(getLoginState, fromLogin.loginError);

// /*
//  * Selectors: Messages
//  *
//  */

export const getFlashMessage = createSelector(getMessagesState, fromMessages.getFlashMessage);

// /*
//  * Selectors: Presets
//  *
//  */

// export const getPresets = createSelector(getPresetsState, fromPresets.getPresets);
// export const getPresetsLoading = createSelector(getPresetsState, fromPresets.getPresetsLoading);
// export const getPresetsLoaded = createSelector(getPresetsState, fromPresets.getPresetsLoaded);
// export const getPresetsError = createSelector(getPresetsState, fromPresets.getPresetsError);

// /*
//  * Selectors: Rules
//  *
//  */

// export const getRules = createSelector(getRulesState, fromRules.getRules);
// export const getRulesLoading = createSelector(getRulesState, fromRules.getRulesLoading);
// export const getRulesLoaded = createSelector(getRulesState, fromRules.getRulesLoaded);
// export const getRulesError = createSelector(getRulesState, fromRules.getRulesError);

// /*
//  * Selectors: Templates
//  *
//  */

// export const getTemplates = createSelector(getTemplatesState, fromTemplates.getTemplates);
// export const getTemplatesLoading = createSelector(getTemplatesState, fromTemplates.getTemplatesLoading);
// export const getTemplatesLoaded = createSelector(getTemplatesState, fromTemplates.getTemplatesLoaded);

// /*
//  * Selectors: Users
//  *
//  */

// export const getUsers = createSelector(getUsersState, fromUsers.getUsers);
// export const getUsersAddUserLoading = createSelector(getUsersState, fromUsers.getUsersAddUserLoading);
// export const getUsersLoading = createSelector(getUsersState, fromUsers.getUsersLoading);
// export const getUsersLoaded = createSelector(getUsersState, fromUsers.getUsersLoaded);
// export const getUsersError = createSelector(getUsersState, fromUsers.getUsersError);
// export const getLoggedinUser = createSelector(getUsersState, fromUsers.getCurrentUser);

// /*
//  * Selectors: Wizard
//  *
//  */

// export const getWizardDocument = createSelector(getWizardState, fromWizard.getWizardDocument);
// export const getWizardTemplateIn = createSelector(getWizardState, fromWizard.getWizardTemplateIn);
// export const getWizardTemplateOut = createSelector(getWizardState, fromWizard.getWizardTemplateOut);
// export const getWizardFields = createSelector(getWizardState, fromWizard.getWizardFields);
// export const getWizardFieldsMapping = createSelector(getWizardState, fromWizard.getWizardFieldsMapping);
// export const getWizardRules = createSelector(getWizardState, fromWizard.getWizardRules);
// export const getWizardRulesMapping = createSelector(getWizardState, fromWizard.getWizardRulesMapping);

// /**
//  *
//  * Selectors: content
//  */

//  export const getContentContent = createSelector(getContentState, fromContent.getContent);
// /*
//  * EXAMPLE STATES AND SELECTORS
//  *
//  */

// /*
//  * Example State
//  *
//  */

// export const getTestState = (state: State) => state.test;

/*
 * Example Selectors
 *
 */
