import tboiApi from "../api/tboiApi";
import type { ResponseItems } from "../interfaces/items";

const PAGE_SIZE = import.meta.env.VITE_APP_API_PAGE_SIZE;

export const getTboiItems = async (
  page: number,
  q?: string,
  sortType?: string
): Promise<ResponseItems> => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: PAGE_SIZE.toString(),
    ...(q && { q }),
    ...(sortType && { sort: sortType }),
  });
  const { data } = await tboiApi.get<ResponseItems>(`/items?${queryParams}`);
  return data;
};
