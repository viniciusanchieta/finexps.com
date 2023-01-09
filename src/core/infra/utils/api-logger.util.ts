import { NextApiRequest } from 'next';

interface LoggerProps {
  params: NextApiRequest;
  description: string;
  category: string;
}

export const apiLogger = ({ params, description, category }: LoggerProps) => {
  const paramsRequestNotPermittedShow = ['password', 'token'];
  const paramsRequest = Object.keys(params).reduce((acc, key) => {
    if (paramsRequestNotPermittedShow.includes(key)) {
      acc[key] = '*****';
    } else {
      acc[key] = params[key];
    }
    return acc;
  }, {});

  console.log({
    params: paramsRequest,
    description,
    category
  });
};
