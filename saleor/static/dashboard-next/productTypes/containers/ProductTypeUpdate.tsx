import * as React from "react";

import {
  PartialMutationProviderProps,
  PartialMutationProviderRenderProps
} from "../..";
import {
  ProductTypeUpdateMutation,
  ProductTypeUpdateMutationVariables
} from "../../gql-types";
import { TypedProductTypeUpdateMutation } from "../mutations";

interface ProductTypeUpdateProviderProps extends PartialMutationProviderProps {
  children: PartialMutationProviderRenderProps<
    ProductTypeUpdateMutation,
    ProductTypeUpdateMutationVariables
  >;
}

const ProductTypeUpdateProvider: React.StatelessComponent<
  ProductTypeUpdateProviderProps
> = ({ children, onError, onSuccess }) => (
  <TypedProductTypeUpdateMutation onCompleted={onSuccess} onError={onError}>
    {(mutate, { data, loading, error }) => {
      return children({
        data,
        error,
        loading,
        mutate
      });
    }}
  </TypedProductTypeUpdateMutation>
);

export default ProductTypeUpdateProvider;
