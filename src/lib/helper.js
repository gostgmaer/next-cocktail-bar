import { invokeAPI } from "@/utilities/http";
import { baseURL } from "@/utilities/settings";
import axios from "axios";
import useSWR from "swr";

// @ts-ignore
export const fetcher = (...args) => axios(...args).then((res) => res.data);

export function useFetcher(endpoint) {
  const { data, error, isLoading } = useSWR(
    `${baseURL}${endpoint}?populate=*`,
    fetcher
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export function useGetFetcher(endpoint, fetcherData) {
  const { data, error, isLoading } = useSWR(
    `${baseURL}${endpoint}`,
    fetcherData
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export default async function getCocktail(id) {
  const newId = {
    i:id
  }
  const res = await invokeAPI("search.php", "get", {}, {}, newId);
  return res;
}
