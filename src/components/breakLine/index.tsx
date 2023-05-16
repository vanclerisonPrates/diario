interface Props {
  isScreenMobile?: boolean;
  className?: string;
}

const BreakLine = ({ isScreenMobile = false, className }: Props) => (
  <hr
    className={
      isScreenMobile
        ? `{h-[2px] w-full bg-[#D1D1D1] ${className}}`
        : `h-[2px] w-[235px] bg-[#D1D1D1]  ${className}`
    }
  />
);

export default BreakLine;
