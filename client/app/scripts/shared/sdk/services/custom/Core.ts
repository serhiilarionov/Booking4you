/* tslint:disable */
import { Injectable, Inject, Optional }  from '@angular/core';
import { Http, Response }  from '@angular/http';
import { BaseLoopBackApi }  from '../core/base.service';
import { LoopBackConfig }  from '../../lb.config';
import { LoopBackAuth }  from '../core/auth.service';
import { LoopBackFilter }  from '../../models/BaseModels';
import { JSONSearchParams }  from '../core/search.params';
import { ErrorHandler }  from '../core/error.service';
import { Subject }  from 'rxjs/Subject';
import 'rxjs/add/operator/map' ;
import { Core }  from '../../models/Core';

// Making Sure EventSource Type is available to avoid compilation issues.
declare var EventSource: any;

/**
 * Api services for the `Core` model.
 */
@Injectable()
export class CoreApi extends BaseLoopBackApi {

  constructor(
    @Inject(Http) http: Http,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth, 
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams, 
    @Optional() @Inject(ErrorHandler) errorHandler: ErrorHandler
  ) {
    super(http, auth, searchParams, errorHandler);
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param string path 
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Core` object.)
   * </em>
   */
  public run(path: any = undefined, body: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/core/run/:path";
    let routeParams: any = {
      path: path
    };
    let postBody: any = {
      body: body
    };
    let urlParams: any = {};
    if (body) urlParams.body = body;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public invoke(request: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/core/invoke";
    let routeParams: any = {};
    let postBody: any = {
      request: request
    };
    let urlParams: any = {};
    if (request) urlParams.request = request;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param object data Request data.
   *
   *  - `phone` – `{string}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `result` – `{object}` - 
   */
  public phoneVerification(phone: any) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/core/phoneVerification";
    let routeParams: any = {};
    let postBody: any = {
      phone: phone
    };
    let urlParams: any = {};
    if (phone) urlParams.phone = phone;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param object data Request data.
   *
   *  - `code` – `{string}` - 
   *
   *  - `smsId` – `{string}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `result` – `{object}` - 
   */
  public phoneVerificationConfirm(code: any, smsId: any) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/core/phoneVerificationConfirm";
    let routeParams: any = {};
    let postBody: any = {
      code: code,
      smsId: smsId
    };
    let urlParams: any = {};
    if (code) urlParams.code = code;
    if (smsId) urlParams.smsId = smsId;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param object data Request data.
   *
   *  - `id` – `{string}` - 
   *
   *  - `phone` – `{string}` - 
   *
   *  - `status` – `{string}` - 
   *
   *  - `time` – `{string}` - 
   *
   *  - `ts` – `{string}` - 
   *
   *  - `err` – `{string}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `result` – `{object}` - 
   */
  public smsStatus(id: any, phone: any, status: any, time: any = undefined, ts: any = undefined, err: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/core/smsStatus";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      id: id,
      phone: phone,
      status: status,
      time: time,
      ts: ts,
      err: err
    };
    let urlParams: any = {};
    if (phone) urlParams.phone = phone;
    if (status) urlParams.status = status;
    if (time) urlParams.time = time;
    if (ts) urlParams.ts = ts;
    if (err) urlParams.err = err;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * <em>
         * (The remote method definition does not provide any description.)
         * </em>
   *
   * @param object data Request data.
   *
   *  - `name` – `{string}` - 
   *
   *  - `type` – `{string}` - 
   *
   *  - `process` – `{string}` - 
   *
   *  - `data` – `{object}` - 
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `result` – `{object}` - 
   */
  public notify(name: any, type: any, process: any, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/core/notify";
    let routeParams: any = {};
    let postBody: any = {
      name: name,
      type: type,
      process: process,
      data: data
    };
    let urlParams: any = {};
    if (name) urlParams.name = name;
    if (type) urlParams.type = type;
    if (process) urlParams.process = process;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }


  /**
   * The name of the model represented by this $resource,
   * i.e. `Core`.
   */
  public getModelName() {
    return "Core";
  }
}
