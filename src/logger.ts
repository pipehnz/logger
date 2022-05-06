import pino from "pino";

const buildLogger = (
  name: string,
  prettyLogs: boolean = true,
  options?: pino.LoggerOptions | pino.DestinationStream
): pino.Logger<pino.LoggerOptions> =>
  pino({
    name,
    transport: prettyLogs && {
      target: "pino-pretty",
    },
    ...options,
  });

export { buildLogger };
