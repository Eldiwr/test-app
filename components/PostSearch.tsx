'use client'

import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";

type Props = {
    onSearch: (value: any[]) => void;
}

export default function PostSearch({onSearch}:Props) {
    const [search, setSearch] = useState('');

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const post = await getPostsBySearch(search);

        onSearch(post);
    }

  return (
    <form onSubmit={handleFormSubmit}>
        <input type="search" placeholder="search" value={search} onChange={event => setSearch(event.target.value)}/>
        <button type="submit">Search</button>
    </form>
  )
}
