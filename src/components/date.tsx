import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

function Date({ dateString }: Props) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default Date;
