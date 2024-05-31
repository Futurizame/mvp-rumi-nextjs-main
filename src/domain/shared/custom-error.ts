export class CustomError extends Error {
  readonly statusCode: number;

  constructor(statusCode: number, message?: string, options?: ErrorOptions) {
    super(message, options);
    this.statusCode = statusCode;
    this.name = "CustomError";
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const isCustomError = (error: unknown): error is CustomError => {
  return error instanceof CustomError;
};
