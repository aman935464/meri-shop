import { Search, SearchIcon } from 'lucide-react';


export default function Searchbar() {
  return (
    <>
        <form className="searchbar">
            <SearchIcon size={22} color='grey' />
            <input type="text" placeholder='Search your product' aria-label='search product'/>
        </form>
    </>
  )
}

