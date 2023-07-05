export const EnvConfiguration = () => ({
  enviroment: process.env.NODO_ENV || 'dev',
  port: parseInt(process.env.PORT, 10) || 3000,
  defaultLimit: parseInt(process.env.DEFAULT_LIMIT, 10) || 10,
});
