import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

interface ResponseError {
  message: string;
}

export class HttpError extends Error {
  readonly status: number = 500;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export function withErrorHandler<T>(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse<ResponseError>) => {
    try {
      await handler(req, res);
    } catch (error) {
      if (error instanceof HttpError) {
        res.status(error.status);
        res.json({ message: error.message });
        return;
      }

      if (error instanceof Error) {
        res.status(500);
        res.json({ message: error.message });
        return;
      }

      res.status(500);
      res.json({ message: typeof error === 'string' ? error : 'Unknown error' });
    }
  };
}
