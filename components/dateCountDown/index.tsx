import dynamic from "next/dynamic";
import classNames from "utils/classNames";

const DynamicComponent = dynamic(() => import("react-date-countdown-timer"), {
  ssr: false,
});

interface Props {
  className?: string;
}
const DateCountDown = ({ className = "" }: Props) => {
  return (
    <>
      <div className={classNames(className, "-mt-1 md:p-3 md:mt-0")}>
        {/* @ts-ignore */}
        <DynamicComponent dateTo="December 06, 2022 10:00:00 GMT+01:00" />
      </div>
    </>
  );
};

export default DateCountDown;
