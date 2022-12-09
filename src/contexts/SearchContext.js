import React, {createContext, useEffect, useState} from 'react'
import { useLocation } from "react-router";

const SearchContext = createContext({});

export default SearchContext;

export const SearchProvider = ({children}) => {
    const [searchString, setSearchString] = useState("")

    const location = useLocation()

    useEffect(() => {
      if (location.pathname !== "/search") {
        setSearchString("")
      }
    }, [location])

    let context = {
        searchString: searchString,
        setSearchString: setSearchString
    }

    return(
        <SearchContext.Provider value={context} >
            {children}
        </SearchContext.Provider>
    )
}