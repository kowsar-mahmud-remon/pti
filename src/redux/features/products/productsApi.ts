import { api } from "../../api/apiSlice";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => "/Item?page=1&pageSize=10",
      providesTags: ["item"],
    }),

    getSingleProduct: build.query({
      query: (id: any) => `/Item/${id}`,
      providesTags: ["item"],
    }),

    createProduct: build.mutation({
      query: (data: any) => ({
        url: `/Item`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["item"],
    }),

    deleteProduct: build.mutation({
      query: (id: any) => ({
        url: `/Item/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["item"],
    }),

    updateProduct: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/Item/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["item"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
