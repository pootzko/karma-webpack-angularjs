/* tslint:disable:no-shadowed-variable */

import * as ng from "angular";

export interface IServiceOptions {
  /**
   * Service name to register with angular (optional - class name will be used if not specified).
   */
  name?: string;
}

export interface IService {
  (
    moduleOrName: string | ng.IModule,
    options?: IServiceOptions
  ): <IService extends Function>(target: IService) => IService | void;
}

// SEE: https://stackoverflow.com/a/36634697/413785
export const Service: IService = (
  moduleOrName: string | ng.IModule,
  options?: IServiceOptions
) => {
  return (service: Function) => {
    let module = typeof moduleOrName === "string" ?
      ng.module(moduleOrName) :
      moduleOrName;

    let serviceName = options && options.name ?
      options.name :
      service["name"];

    module.service(serviceName, service);
  };
};