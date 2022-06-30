/**
 * @author Wilbert Bocanegra Velazquez /  Team core Softengy
 */

/**
 * @interface - provider response data
 */
export interface IResponse<T = {}> {
  data?: T;
  message: string;
  code: number;
}
