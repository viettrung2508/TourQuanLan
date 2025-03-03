import { Fragment } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination({
  page = 1,
  onSetPage,
  total = 0,
  className,
  ...other
}: {
  page: number;
  total: number;
  onSetPage: Function;
  className?: React.ComponentProps<"div">["className"];
}) {
  if (!total) {
    return;
  }

  return (
    <div className={"flex space-x-1 " + className} {...other}>
      {page > 1 ? (
        <button
          onClick={() => onSetPage(page - 1)}
          className="w-10 h-10 flex justify-center items-center rounded-full border border-transparent bg-primary_green bg-opacity-20 text-center text-lg transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-primary_green disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <MdKeyboardArrowLeft />
        </button>
      ) : (
        <div className="w-10" />
      )}
      {Array(total)
        .fill(0)
        .map((_, index) => {
          const numberPage = index + 1;
          if (
            page === numberPage ||
            numberPage === total ||
            numberPage === page + 1 ||
            (page === total - 3 && numberPage === total - 1) ||
            (page === total - 2 && numberPage === page - 1) ||
            (page === total - 1 &&
              (numberPage === page - 1 || numberPage === page - 2)) ||
            (page === total &&
              (numberPage === page - 1 ||
                numberPage === page - 2 ||
                numberPage === page - 3))
          ) {
            return (
              <Fragment key={index}>
                {numberPage === total && page < total - 3 && (
                  <div
                    className={`w-10 h-10 flex justify-center items-center rounded-full bg-primary_green bg-opacity-20 text-primary_green border border-transparent text-center text-sm font-bold transition-all shadow-md disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
                  >
                    ...
                  </div>
                )}
                <button
                  className={`w-10 h-10 flex justify-center items-center rounded-full bg-primary_green ${
                    page === numberPage
                      ? "bg-opacity-100 text-white"
                      : "bg-opacity-20 text-primary_green"
                  } border border-transparent text-center text-sm font-bold hover:text-white transition-all shadow-md hover:shadow-lg hover:bg-primary_green disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
                  onClick={() => {
                    onSetPage(numberPage);
                  }}
                >
                  {index + 1}
                </button>
                {/* {numberPage === total - 2 && page < total -2 && <div  
                className={`w-10 h-10 flex justify-center items-center rounded-full bg-primary_green bg-opacity-20 text-primary_green border border-transparent text-center text-sm font-bold transition-all shadow-md disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
              >
                  ...
              </div>} */}
              </Fragment>
            );
          }
          return null;
        })}
      {page < total ? (
        <button
          onClick={() => onSetPage(page + 1)}
          className="w-10 h-10 flex justify-center items-center rounded-full border border-transparent bg-primary_green bg-opacity-20 text-center text-lg transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-primary_green disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          <MdKeyboardArrowRight />
        </button>
      ) : (
        <div className="w-10" />
      )}
    </div>
  );
}
