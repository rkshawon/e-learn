const queries = ["sortOrder", "sortBy", "limit", "page", "select"];

const getQuery = (query: any) => {
  for (const [key, val] of Object.entries(query)) {
    if (queries.includes(key)) {
      delete query[key];
    }
  }

  return query;
};

export default getQuery;
