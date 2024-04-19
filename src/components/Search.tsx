import { useKey } from "hooks/useKey";
import { useEffect, useRef } from "react";

interface ISearch {
  query: string;
  setQuery: (value: React.SetStateAction<string>) => void;
}

export default function Search({ query, setQuery }: ISearch) {
  const inputElement = useRef<HTMLInputElement>(null);

  useKey("Enter", function () {
    if (document.activeElement === inputElement.current) return;
    inputElement.current?.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
