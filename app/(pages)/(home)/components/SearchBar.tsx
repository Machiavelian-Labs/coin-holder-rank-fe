"use client";

import React, { useEffect, useState } from "react";
import { Popover } from "@radix-ui/themes";
import { searchRepo } from "../service/apis";
import { useSearchGetData } from "../service/fetchers";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearchBarProps {
  searchKeyword?: string;
  setSearchKeyword?: (value: string) => void;
  actionSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const { list, isLoading, totalCount, getRepoList } = useSearchGetData();
  const [isOpen, setIsOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, []);

  const onSearchRepo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("@  onSearch");
  };
  //√Ginue53zn2db
  return (
    <div className="px-4 flex justify-center">
      <Popover.Root open={isOpen} onOpenChange={handleOpen}>
        <Popover.Trigger>
          <div className="flex lg:w-2/3 sm:w-full h-[50px] rounded-full px-4 py-1 border border-solid">
            <input
              type="search"
              className="w-11/12 focus:outline-none bg-white"
              placeholder="검색어를 입력하세요"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onClick={(e) => e.preventDefault()}
            />
            <button onClick={onSearchRepo}>
              <div className="flex justify-center align-middle font-bold w-[120px] h-full rounded-full  bg-slate-600">
                <MagnifyingGlassIcon width="20" height="20" />
              </div>
            </button>
          </div>
        </Popover.Trigger>
        <Popover.Content className="PopoverContent w-2/3" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p className="Text" style={{ marginBottom: 10 }}>
              Dimensions
            </p>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="width">
                Width
              </label>
              <input className="Input" id="width" defaultValue="100%" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="maxWidth">
                Max. width
              </label>
              <input className="Input" id="maxWidth" defaultValue="300px" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="height">
                Height
              </label>
              <input className="Input" id="height" defaultValue="25px" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="maxHeight">
                Max. height
              </label>
              <input className="Input" id="maxHeight" defaultValue="none" />
            </fieldset>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default SearchBar;
