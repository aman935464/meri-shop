import { SearchIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import useProductStore from "../../store/useProductStore";

export default function Searchbar() {
  const { selectedQuery, setSelectedQuery } = useProductStore();

  return (
    <>
      <form className="searchbar">
        <SearchIcon size={22} color="grey" />
        <input
          type="text"
          value={selectedQuery}
          onChange={(e) => setSelectedQuery(e.target.value)}
          placeholder="Search your product"
          aria-label="search product"
          spellCheck={false}
        />
        {selectedQuery && <X size={22} color="grey" onClick={() => setSelectedQuery("")}/>}
      </form>
    </>
  );
}
