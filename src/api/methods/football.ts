import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { ApiErrors } from 'constants/errors';
import { FootballBase } from 'interfaces/api/Football.interface';
import { ApiResponseWithMeta, IResponseWithMeta, ParamsFetchAll } from 'interfaces/api/response.interfaces';
import { axios } from 'utils/axios';

const getList = async (params: ParamsFetchAll): ApiResponseWithMeta<FootballBase> => {
  try {
    const formParams = { ...params };

    if (!params.page || Number.isNaN(params.page)) formParams.page = 1;

    const res = await axios.get<any>(endpoints.football.list());

    console.log(res);

    console.log(res.data.football);

    return { data: res.data.football };
  } catch (error) {
    const errorAxios = error as AxiosError<any>;

    if (errorAxios?.response?.status === 404) {
      return { errorMessage: ApiErrors.NotFound };
    }

    return { errorMessage: ApiErrors.SomethingGoesWrong };
  }
};

export const APIFootball = {
  getList,
};
