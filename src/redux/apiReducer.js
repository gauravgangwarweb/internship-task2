import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://602e7c2c4410730017c50b9d.mockapi.io/' }),
  endpoints: (builder) => ({
    getList: builder.query({
      query: () => `users`,
    }),
  }),
})

export const { useGetListQuery } = dataApi