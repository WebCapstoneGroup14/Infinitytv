import React, { useState, Fragment, useEffect } from "react";
import {
  LanguageData,
  RatesData,
  TimesData,
  YearData,
} from "../Data/FilterDatas";
import { CategoriesData } from "./../Data/CategoriesData";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa";

const allOption = { title: "All" };

function Filters({ allMovies, setFilteredMovies }) {
  const [year, setYear] = useState(allOption);
  const [times, setTimes] = useState(allOption);
  const [rates, setRates] = useState(allOption);
  const [language, setLanguage] = useState(allOption);
  const [category, setCategory] = useState(allOption);

  useEffect(() => {
    const filterMovies = () => {
      return allMovies.filter((movie) => {
        return (
          (category.title === "All" || movie.category === category.title) &&
          (language.title === "All" || movie.language === language.title) &&
          (year.title === "All" || movie.year === year.title) &&
          (times.title === "All" || movie.time === times.title) &&
          (rates.title === "All" || movie.rate === rates.title)
        );
      });
    };

    setFilteredMovies(filterMovies());
  }, [category, language, year, times, rates, allMovies, setFilteredMovies]);

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: [allOption, ...CategoriesData],
    },
    {
      value: language,
      onChange: setLanguage,
      items: [allOption, ...LanguageData],
    },
    { value: year, onChange: setYear, items: [allOption, ...YearData] },
    { value: times, onChange: setTimes, items: [allOption, ...TimesData] },
    { value: rates, onChange: setRates, items: [allOption, ...RatesData] },
  ];

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-5 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <FaAngleDown className="h-4 w-4" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((iterm, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-subMain text-white" : "text-main"
                      }`
                    }
                    value={iterm}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {iterm.title}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCheck className="h-3 w-3" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
}

export default Filters;
