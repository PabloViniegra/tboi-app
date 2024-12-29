import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useInfiniteItems } from "../composables/useItems";
import { Item } from "../interfaces/items";

export const useItemStore = defineStore("item", () => {
  // States
  const items = ref<Item[]>([]);
  const rawQuery = ref<string>("");
  const query = ref<string>("");
  const isPending = ref<boolean>(false);
  const isFetching = ref<boolean>(false);
  const isError = ref<boolean>(false);
  const error = ref<string | null>(null);
  const hasNextPage = ref<boolean>(true);
  const isFetchingNextPage = ref<boolean>(false);

  // Infinite query
  const {
    items: paginatedItems,
    isPending: infinitePending,
    isFetching: infiniteFetching,
    isError: infiniteError,
    error: infiniteErrorMsg,
    fetchNextPage,
    hasNextPage: infiniteHasNextPage,
    isFetchingNextPage: infiniteFetchingNextPage,
  } = useInfiniteItems(query);

  // Sync states with useInfiniteItems
  watch(
    [
      paginatedItems,
      infinitePending,
      infiniteFetching,
      infiniteError,
      infiniteErrorMsg,
      infiniteHasNextPage,
      infiniteFetchingNextPage,
    ],
    ([
      newItems,
      newPending,
      newFetching,
      newError,
      newErrorMsg,
      newHasNext,
      newFetchingNext,
    ]) => {
      if (newItems && newItems.pages) {
        items.value = newItems.pages.flatMap((page) => page.items);
      } else {
        items.value = [];
      }
      isPending.value = newPending;
      isFetching.value = newFetching;
      isError.value = newError;
      error.value = newErrorMsg?.message || null;
      hasNextPage.value = newHasNext;
      isFetchingNextPage.value = newFetchingNext;
    }
  );

  // Debounce query updates
  let debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  watch(
    rawQuery,
    (newQuery) => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      debounceTimeout = setTimeout(() => {
        query.value = newQuery.trim();
      }, 300);
    },
    { immediate: true }
  );

  // Actions
  const clearSearch = () => {
    rawQuery.value = "";
  };

  const loadMore = () => {
    fetchNextPage();
  };

  return {
    items,
    rawQuery,
    query,
    isPending,
    isFetching,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    clearSearch,
    loadMore,
  };
});
