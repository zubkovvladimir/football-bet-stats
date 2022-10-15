import { endpoints } from 'api/endpoints';
import { AxiosError } from 'axios';
import { ApiErrors } from 'constants/errors';
import { FootballBase } from 'interfaces/api/Football.interface';
import { ApiResponseWithMeta, IResponseWithMeta, ParamsFetchAll } from 'interfaces/api/response.interfaces';
import { axios } from 'utils/axios';

const getList = async (params: ParamsFetchAll): ApiResponseWithMeta<FootballBase> => {
  try {
    const formParams = { ...params };
    const { pageSize = 8, sort, search } = params;

    if (!params.page || Number.isNaN(params.page)) formParams.page = 1;

    const res = await axios.get<any>(endpoints.football.list(), {
      // headers: { 'Access-Control-Allow-Origin': '*' },
      // transformRequest: (data, headers) => {
      //   console.log(headers);
      //   delete headers.common.Accept;
      //   return data;
      // },
    });

    console.log(res.data.Value);

    return { data: res.data.Value };
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
