export async function loadData(store, { page, sortOptions, searchTerm, sources }) {
  store.setState({ isLoading: true });
  const { pageSize, pageStart } = page;
  const { current } = sortOptions;
  const sort = current.option.concat(current.direction);

  let data = null;
  let url = `https://movinglocal-api.herokuapp.com/article?_limit=${pageSize}&_start=${pageStart}&_sort=${sort}`;

  sources.forEach((source) => {
    if (!source.active) url = url.concat(`&source_ne=${source.id}`);
  });

  if (searchTerm.length > 0) url = url.concat(`&_q=${searchTerm}`);

  try {
    data = await fetch(url)
      .then(r => r.json())
      .then(r => r.filter(e => !e.ignored));
  } catch (err) {
    console.log(err);
  }

  return data;
}

export default {
  loadData
};
