/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter, SDKToken, AccessToken } from '../../models/BaseModels';
import { JSONSearchParams } from '../core/search.params';
import { ErrorHandler } from '../core/error.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Client } from '../../models/Client';
import { Company } from '../../models/Company';
import { Booking } from '../../models/Booking';
import { Comment } from '../../models/Comment';

// Making Sure EventSource Type is available to avoid compilation issues.
declare var EventSource: any;

/**
 * Api services for the `Client` model.
 */
@Injectable()
export class ClientApi extends BaseLoopBackApi {

  constructor(
    @Inject(Http) http: Http,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth, 
    @Inject(JSONSearchParams) protected searchParams: JSONSearchParams, 
    @Optional() @Inject(ErrorHandler) errorHandler: ErrorHandler
  ) {
    super(http, auth, searchParams, errorHandler);
  }

  /**
   * Find a related item by id for companies.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for companies
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public findByIdCompanies(id: any, fk: any) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Client) => new Client(instance));
  }

  /**
   * Delete a related item by id for companies.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for companies
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdCompanies(id: any, fk: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Update a related item by id for companies.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for companies
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public updateByIdCompanies(id: any, fk: any, data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Add a related item by id for companies.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for companies
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public linkCompanies(id: any, fk: any, data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies/rel/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Remove the companies relation to an item by id.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for companies
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public unlinkCompanies(id: any, fk: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies/rel/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Check the existence of companies relation to an item by id.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for companies
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public existsCompanies(id: any, fk: any) {
    let method: string = "HEAD";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies/rel/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Find a related item by id for bookings.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for bookings
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public findByIdBookings(id: any, fk: any) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/bookings/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Client) => new Client(instance));
  }

  /**
   * Delete a related item by id for bookings.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for bookings
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdBookings(id: any, fk: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/bookings/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Update a related item by id for bookings.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for bookings
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public updateByIdBookings(id: any, fk: any, data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/bookings/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Find a related item by id for comment.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for comment
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public findByIdComment(id: any, fk: any) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/comment/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Client) => new Client(instance));
  }

  /**
   * Delete a related item by id for comment.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for comment
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public destroyByIdComment(id: any, fk: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/comment/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Update a related item by id for comment.
   *
   * @param any id User id
   *
   * @param any fk Foreign key for comment
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public updateByIdComment(id: any, fk: any, data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/comment/:fk";
    let routeParams: any = {
      id: id,
      fk: fk
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Queries companies of Client.
   *
   * @param any id User id
   *
   * @param object filter 
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public getCompanies(id: any, filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Creates a new instance in companies of this model.
   *
   * @param any id User id
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public createCompanies(id: any, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Deletes all companies of this model.
   *
   * @param any id User id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteCompanies(id: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Counts companies of Client.
   *
   * @param any id User id
   *
   * @param object where Criteria to match model instances
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countCompanies(id: any, where: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies/count";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Queries bookings of Client.
   *
   * @param any id User id
   *
   * @param object filter 
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public getBookings(id: any, filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/bookings";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Creates a new instance in bookings of this model.
   *
   * @param any id User id
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public createBookings(id: any, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/bookings";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Deletes all bookings of this model.
   *
   * @param any id User id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteBookings(id: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/bookings";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Counts bookings of Client.
   *
   * @param any id User id
   *
   * @param object where Criteria to match model instances
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countBookings(id: any, where: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/bookings/count";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Queries comment of Client.
   *
   * @param any id User id
   *
   * @param object filter 
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public getComment(id: any, filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/comment";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Creates a new instance in comment of this model.
   *
   * @param any id User id
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public createComment(id: any, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/comment";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Deletes all comment of this model.
   *
   * @param any id User id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public deleteComment(id: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/comment";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Counts comment of Client.
   *
   * @param any id User id
   *
   * @param object where Criteria to match model instances
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public countComment(id: any, where: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/comment/count";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Create a new instance of the model and persist it into the data source.
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public create(data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Client) => new Client(instance));
  }

  /**
   * Patch an existing model instance or insert a new one into the data source.
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public upsert(data: any = undefined) {
    let method: string = "PUT";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Client) => new Client(instance));
  }

  /**
   * Replace an existing model instance or insert a new one into the data source.
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public replaceOrCreate(data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/replaceOrCreate";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Update an existing model instance or insert a new one into the data source based on the where criteria.
   *
   * @param object where Criteria to match model instances
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public upsertWithWhere(where: any = undefined, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/upsertWithWhere";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Client) => new Client(instance));
  }

  /**
   * Check whether a model instance exists in the data source.
   *
   * @param any id Model id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `exists` – `{boolean}` - 
   */
  public exists(id: any) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/exists";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Find a model instance by {{id}} from the data source.
   *
   * @param any id Model id
   *
   * @param object filter Filter defining fields and include
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public findById(id: any, filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Client) => new Client(instance));
  }

  /**
   * Replace attributes for a model instance and persist it into the data source.
   *
   * @param any id Model id
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
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public replaceById(id: any, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/replace";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Find all instances of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public find(filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instances: Array<Client>) =>
        instances.map((instance: Client) => new Client(instance))
    );
  }

  /**
   * Find first instance of the model matched by filter from the data source.
   *
   * @param object filter Filter defining fields, where, include, order, offset, and limit
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public findOne(filter: LoopBackFilter = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/findOne";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
    if (filter) urlParams.filter = filter;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instance: Client) => new Client(instance));
  }

  /**
   * Update instances of the model matched by {{where}} from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Information related to the outcome of the operation
   */
  public updateAll(where: any = undefined, data: any = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/update";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Delete a model instance by {{id}} from the data source.
   *
   * @param any id Model id
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public deleteById(id: any) {
    let method: string = "DELETE";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {};
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Count instances of the model matched by where from the data source.
   *
   * @param object where Criteria to match model instances
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Data properties:
   *
   *  - `count` – `{number}` - 
   */
  public count(where: any = undefined) {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/count";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
    if (where) urlParams.where = where;
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Login a user with username/email and password.
   *
   * @param string include Related objects to include in the response. See the description of return value for more details.
   *   Default value: `user`.
   *
   *  - `rememberMe` - `boolean` - Whether the authentication credentials
   *     should be remembered in localStorage across app/browser restarts.
   *     Default: `true`.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * The response body contains properties of the AccessToken created on login.
   * Depending on the value of `include` parameter, the body may contain additional properties:
   * 
   *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
   * 
   *
   */
  public login(credentials: any, include: any = 'user', rememberMe: boolean = true) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/login";
    let routeParams: any = {};
    let postBody: any = {
      credentials: credentials
    };
    let urlParams: any = {};
    if (include) urlParams.include = include;
    let result = this.request(method, url, routeParams, urlParams, postBody)
      .map(
        (response: SDKToken) => {
          response.rememberMe = rememberMe;
          this.auth.setUser(response);
          this.auth.save();
          return response;
        }
      );
      return result;
      
  }

  /**
   * Logout a user with access token.
   *
   * @param object data Request data.
   *
   *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public logout() {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/logout";
    let routeParams: any = {};
    let postBody: any = {};
    let urlParams: any = {};
       urlParams.access_token = this.auth.getAccessTokenId();
    this.auth.clear(); 
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Creates a new instance in companies of this model.
   *
   * @param any id User id
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public createManyCompanies(id: any, data: Array<any> = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/companies";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Creates a new instance in bookings of this model.
   *
   * @param any id User id
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public createManyBookings(id: any, data: Array<any> = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/bookings";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Creates a new instance in comment of this model.
   *
   * @param any id User id
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public createManyComment(id: any, data: Array<any> = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients/:id/comment";
    let routeParams: any = {
      id: id
    };
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result;
  }

  /**
   * Create a new instance of the model and persist it into the data source.
   *
   * @param object data Request data.
   *
   * This method expects a subset of model properties as request parameters.
   *
   * @returns object[] An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `Client` object.)
   * </em>
   */
  public createMany(data: Array<any> = undefined) {
    let method: string = "POST";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/clients";
    let routeParams: any = {};
    let postBody: any = {
      data: data
    };
    let urlParams: any = {};
    let result = this.request(method, url, routeParams, urlParams, postBody);
    return result.map((instances: Array<Client>) =>
        instances.map((instance: Client) => new Client(instance))
    );
  }
  /**
   * @ngdoc method
   * @name sdk.Client#getCurrent
   * @methodOf sdk.Client
   *
   * @description
   *
   * Get data of the currently logged user. Fail with HTTP result 401
   * when there is no user logged in.
   *
   * @returns object An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   */
  public getCurrent(): any {
    let method: string = "GET";
    let url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() + "/clients" + "/:id";
    let id: any = this.auth.getCurrentUserId();
    if (id == null)
    id = '__anonymous__';
    let routeParams: any = { id: id };
    let urlParams: any = {};
    let postBody: any = {};
    return this.request(method, url, routeParams, urlParams, postBody);
  }
  /**
   * Get data of the currently logged user that was returned by the last
   * call to {@link sdk.Client#login} or
   * {@link sdk.Client#getCurrent}. Return null when there
   * is no user logged in or the data of the current user were not fetched
   * yet.
   *
   * @returns object An Account instance.
   */
  public getCachedCurrent() {
    return this.auth.getCurrentUserData();
  }
  /**
   * Get data of the currently logged access tokern that was returned by the last
   * call to {@link sdk.Client#login}
   *
   * @returns object An AccessToken instance.
   */
  public getCurrentToken(): AccessToken {
    return this.auth.getToken();
  }
  /**
   * @name sdk.Client#isAuthenticated
   *
   * @returns {boolean} True if the current user is authenticated (logged in).
   */
  public isAuthenticated() {
    return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
  }

  /**
   * @name sdk.Client#getCurrentId
   *
   * @returns object Id of the currently logged-in user or null.
   */
  public getCurrentId() {
    return this.auth.getCurrentUserId();
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `Client`.
   */
  public getModelName() {
    return "Client";
  }
}
