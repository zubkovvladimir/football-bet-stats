import { combineReducers } from '@reduxjs/toolkit';

import { footballReducer as football } from './football/reducer';

export const rootReducer = combineReducers({ football });

export type RootState = ReturnType<typeof rootReducer>;
