export interface Props {
  year: string | { start: string; end: string };
  title: string;

  sources: {
    author?: string;
    title?: string;
    location?: string;
    publisher?: string;
    year?: string;
    url: string;
  }[];

  flip?: boolean;
  children?: React.ReactNode;
  final?: boolean;
}
