export type EntryInfo = {
  url: string;
  name: string;
  type: string;
};

export type Args = {
  _: string[];
  // -p --port
  p: number;
  port: number;
  // --cors
  cors: boolean;
  // -h --help
  h: boolean;
  help: boolean;
  // --verbose
  verbose: boolean;
  // -q --quite
  q: boolean;
  quite: boolean;
};
