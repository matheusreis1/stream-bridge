import * as SecureStore from "expo-secure-store";

const AUTH_STORAGE_KEY = 'jwtToken';

export const setAccessToken = async (token: string) => {
  await SecureStore.setItemAsync(AUTH_STORAGE_KEY, token);
}

export const getAccessToken = async () => {
  return await SecureStore.getItemAsync(AUTH_STORAGE_KEY);
}
