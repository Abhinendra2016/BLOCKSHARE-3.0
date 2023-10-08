import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ipfsApi = createApi({
    reducerPath: 'ipfsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ipfs.io/ipfs/'}),
    endpoints: (builder) => ({
        getIpfsPost: builder.query({
            query: (cid) => `${cid}/post.json`,
        })
    })
});

export const {useGetIpfsPostQuery} = ipfsApi;