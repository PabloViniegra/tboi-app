import { computed, Ref } from "vue";
import { getTboiItems } from "../helpers/get-tboi-items";
import { useInfiniteQuery, useQuery } from "@tanstack/vue-query";

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

export const useInfiniteItems = (q?: Ref<string>) => {
  const queryKey = computed(() => ["items_infinite", q?.value]);
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
    queryFn: ({ pageParam = 1 }) => getTboiItems(pageParam, q?.value),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
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
