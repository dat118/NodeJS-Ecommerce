export const NotFound = (req: any, res: any, next: any) => {
  const error = new Error(`Not Found ${req.originURL}`);
  res.status = 404;
  next(error);
};

export const ErrorHandler = (err: any, req: any, res: any, next: any) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};
