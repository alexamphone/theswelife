import Date from './date';

type Props = {
  headline: string;
  supporting: string;
  date?: string;
  imgURL?: string;
};

function Hero({ headline, supporting, date, imgURL }: Props) {
  return (
    <div
      className="hero-container relative"
      style={{ backgroundImage: `url('${imgURL}')` }}
    >
      <div className="hero absolute flex flex-col justify-end h-full w-full p-4">
        <h1 className="text-white mt-0 mb-2">{headline}</h1>
        <p className="inline-block text-lg text-white mt-0 mb-1">
          {supporting}
        </p>
        {date != null && (
          <p className="inline-block text-sm text-white m-0">
            <Date dateString={date} />
          </p>
        )}
      </div>
    </div>
  );
}

export default Hero;
