import { NoParamEndpointConstructor } from 'interfaces/endpoints.interfaces';

const base = '/football' as const;

interface Endpoints {
  list: NoParamEndpointConstructor;
}

export const footballEndpoints: Endpoints = {
  list: () => `${base}`,
};
