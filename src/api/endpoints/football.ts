import { NoParamEndpointConstructor } from 'interfaces/endpoints.interfaces';

const base =
  '/LiveFeed/Get1x2_VZip?sports=1&count=200&antisports=188&mode=4&country=1&partner=51&getEmpty=true&noFilterBlockEvent=true' as const;

interface Endpoints {
  list: NoParamEndpointConstructor;
}

export const footballEndpoints: Endpoints = {
  list: () => `${base}`,
};
