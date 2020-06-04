import lodash from "lodash";

//Utility function to page data
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return lodash(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
