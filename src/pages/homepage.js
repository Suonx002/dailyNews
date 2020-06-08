import React, { useContext, useEffect } from 'react';

import Searchbar from '../components/searchbar';
import TopHeadlines from '../components/topHeadlines';
import SearchResults from '../components/searchResults';

import { SearchContext } from '../context/searchContext';

const Homepage = (props) => {
  const searchContext = useContext(SearchContext);
  const { results, searchResults } = searchContext;

  const formatUrl = (url) =>
    url.includes('-') ? url.replace(/[-]/g, ' ') : url;

  useEffect(() => {
    if (props.match.params.searchQuery) {
      searchResults(formatUrl(props.match.params.searchQuery.toLowerCase()));
      props.history.push(`/${props.match.params.searchQuery.toLowerCase()}`);
    }
    //eslint-disable-next-line
  }, [props.match.params.searchQuery]);
  return (
    <main>
      <Searchbar />
      {results !== null ? <SearchResults /> : <TopHeadlines />}
    </main>
  );
};

export default Homepage;
