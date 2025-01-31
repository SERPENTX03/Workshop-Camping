"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)
    if(value){
      params.set('search',value)
    } else{
      params.delete('search')
    }
    replace(`/?${params.toString()}`)

  }, 500);

  useEffect(() => {
    const searchQuery = searchParams.get('search'); 
    if (!searchQuery) {
      setSearch('');
    }
  }, [searchParams]);
  return (
    <div className="w-full">
      <Input
       placeholder="Seach..." 
       onChange={(e)=>{
        setSearch(e.target.value)
        handleSearch(e.target.value)
       }}
       value={search}
       />
    </div>
  );
};

export default Search;
