import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api';
import { FootballBase } from 'interfaces/api/Football.interface';
import { ParamsFetchAll, ReturnFetchAll } from 'interfaces/api/response.interfaces';

export const fetchFootball = createAsyncThunk<any, ParamsFetchAll, { rejectValue: string }>(
  'FETCH_FOOTBALL',
  async (params, { rejectWithValue }) => {
    const { data, errorMessage } = await api.football.getList(params);

    if (data) {
      return data;
    }

    if (errorMessage) {
      return rejectWithValue(errorMessage);
    }

    throw Error();
  },
);
