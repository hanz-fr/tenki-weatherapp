import React from "react";

export default function ButtonSettings() {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="hover:bg-slate-200 active:bg-slate-300 transition-all ease-in-out duration-300 p-1 rounded-md"
        data-hs-overlay="#hs-vertically-centered-modal"
      >
        <svg
          width="27"
          height="29"
          viewBox="0 0 27 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 18.2355C15.6967 18.2355 17.4774 16.4548 17.4774 14.2581C17.4774 12.0614 15.6967 10.2806 13.5 10.2806C11.3033 10.2806 9.52254 12.0614 9.52254 14.2581C9.52254 16.4548 11.3033 18.2355 13.5 18.2355Z"
            stroke="#30373E"
            stroke-width="1.5"
          />
          <path
            d="M2.44405 12.455C3.07116 12.8475 3.47421 13.5183 3.47421 14.2581C3.47421 14.9979 3.07116 15.6688 2.44405 16.0612C2.01847 16.3304 1.7427 16.5438 1.54781 16.7984C1.3358 17.0747 1.18031 17.3901 1.09022 17.7266C1.00014 18.063 0.977223 18.4139 1.02278 18.7593C1.09173 19.2816 1.40064 19.8172 2.01714 20.8872C2.6363 21.9571 2.94521 22.4914 3.36284 22.8136C3.63919 23.0256 3.9546 23.1811 4.29105 23.2712C4.6275 23.3613 4.97841 23.3842 5.32372 23.3386C5.64191 23.2962 5.96409 23.1663 6.40956 22.9303C6.72836 22.7558 7.08629 22.6652 7.4497 22.6671C7.81312 22.6689 8.1701 22.7631 8.48711 22.9409C9.12747 23.3121 9.50798 23.9949 9.5345 24.7347C9.55306 25.2385 9.60079 25.5832 9.72409 25.8789C9.85735 26.2008 10.0528 26.4933 10.2991 26.7397C10.5455 26.9861 10.838 27.1815 11.1599 27.3147C11.6465 27.5162 12.2643 27.5162 13.5 27.5162C14.7357 27.5162 15.3535 27.5162 15.8401 27.3147C16.162 27.1815 16.4545 26.9861 16.7009 26.7397C16.9472 26.4933 17.1427 26.2008 17.2759 25.8789C17.3979 25.5832 17.4469 25.2385 17.4655 24.7347C17.492 23.9949 17.8725 23.3108 18.5129 22.9409C18.8299 22.7631 19.1869 22.6689 19.5503 22.6671C19.9137 22.6652 20.2716 22.7558 20.5904 22.9303C21.0359 23.1663 21.3594 23.2962 21.6776 23.3386C22.3746 23.4303 23.0794 23.2414 23.6372 22.8136C24.0548 22.4927 24.3637 21.9571 24.9815 20.8872C25.2573 20.4099 25.4708 20.04 25.6299 19.7297M24.5559 16.0626C24.2455 15.8739 23.9882 15.6094 23.808 15.2941C23.6278 14.9787 23.5307 14.6227 23.5258 14.2594C23.5258 13.5183 23.9288 12.8475 24.5559 12.4537C24.9815 12.1859 25.256 11.9724 25.4522 11.7179C25.6642 11.4415 25.8197 11.1261 25.9098 10.7897C25.9999 10.4532 26.0228 10.1023 25.9772 9.75699C25.9083 9.23462 25.5994 8.69899 24.9829 7.62906C24.3637 6.55913 24.0548 6.02483 23.6372 5.70266C23.3608 5.49065 23.0454 5.33516 22.7089 5.24507C22.3725 5.15499 22.0216 5.13207 21.6763 5.17763C21.3581 5.22006 21.0359 5.34999 20.5891 5.58598C20.2705 5.76022 19.9128 5.85065 19.5496 5.84879C19.1865 5.84694 18.8297 5.75286 18.5129 5.57538C18.2006 5.38964 17.9406 5.12757 17.7574 4.81379C17.5742 4.50001 17.4738 4.14481 17.4655 3.78155C17.4469 3.27775 17.3992 2.93303 17.2759 2.63738C17.1427 2.31545 16.9472 2.02293 16.7009 1.77656C16.4545 1.53019 16.162 1.33478 15.8401 1.20152C15.3535 1 14.7357 1 13.5 1C12.2643 1 11.6465 1 11.1599 1.20152C10.838 1.33478 10.5455 1.53019 10.2991 1.77656C10.0528 2.02293 9.85735 2.31545 9.72409 2.63738C9.60211 2.93303 9.55306 3.27775 9.5345 3.78155C9.52624 4.14481 9.42578 4.50001 9.24257 4.81379C9.05936 5.12757 8.7994 5.38964 8.48711 5.57538C8.1701 5.75309 7.81312 5.8473 7.4497 5.84916C7.08629 5.85101 6.72836 5.76045 6.40956 5.58598C5.96409 5.34999 5.64059 5.22006 5.32239 5.17763C4.62544 5.08598 3.92061 5.27482 3.36284 5.70266C2.94654 6.02483 2.6363 6.55913 2.01847 7.62906C1.7427 8.10635 1.52924 8.47625 1.37015 8.78649"
            stroke="#30373E"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
