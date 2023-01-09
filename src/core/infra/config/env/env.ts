const isEnvVariable = (variable: string): string => {
  const hasVariable = process.env[variable];

  if (!hasVariable) {
    throw new Error(`Variable ${variable} not found in .env file`);
  }

  return hasVariable;
};

export const JWT_SECRET = isEnvVariable('JWT_SECRET');
export const BASE_URL = isEnvVariable('BASE_URL');
export const EMAIL_HOST = isEnvVariable('EMAIL_HOST');
export const EMAIL_PORT = isEnvVariable('EMAIL_PORT');
export const EMAIL_USER = isEnvVariable('EMAIL_USER');
export const EMAIL_PASS = isEnvVariable('EMAIL_PASS');
export const EMAIL_FROM = isEnvVariable('EMAIL_FROM');
