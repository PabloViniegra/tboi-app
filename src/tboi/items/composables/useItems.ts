import { computed, Ref } from "vue";
import { getTboiItems } from "../helpers/get-tboi-items";
import {
  useQueryClient,
  useQuery,
  useInfiniteQuery,
} from "@tanstack/vue-query";
import { ResponseItems } from "../interfaces/items";

export const useItems = (page: number, q?: string) => {
  const {
    isLoading,
    data: items,
    isError,
    error,
  } = useQuery({
    queryKey: ["items", page, q],
    queryFn: () => getTboiItems(page, q || undefined),
    retry: 2,
  });

  return {
    isLoading,
    items,
    isError,
    error,
  };
};

export const useInfiniteItems = (q?: Ref<string>, sortType?: Ref<string>) => {
  const queryKey = computed(() => [
    "items_infinite",
    q?.value,
    sortType?.value,
  ]);
  const queryClient = useQueryClient();

  const getCachedData = () => {
    const cacheData = queryClient.getQueryData<ResponseItems>(queryKey.value);
    if (cacheData) {
      return {
        pages: [cacheData],
        pageParams: [1],
      };
    }
    return undefined;
  };

  const {
    data: items,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isPending,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }) =>
      getTboiItems(pageParam, q?.value, sortType?.value),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
    retry: 3,
    initialData: getCachedData,
    placeholderData: getCachedData,
  });

  return {
    items,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isPending,
  };
};
