import gql from 'graphql-tag';
import 'stencil-apollo';
import { Component, Prop, h } from '@stencil/core';
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };

declare global {
  export type SubmitRepositoryMutationVariables = Exact<{
    repoFullName: Types.Scalars['String'];
  }>;

  export type SubmitRepositoryMutation = { __typename?: 'Mutation' } & {
    submitRepository?: Types.Maybe<{ __typename?: 'Entry' } & Pick<Types.Entry, 'createdAt'>>;
  };
}

const SubmitRepositoryDocument = gql`
  mutation submitRepository($repoFullName: String!) {
    submitRepository(repoFullName: $repoFullName) {
      createdAt
    }
  }
`;

@Component({
  tag: 'apollo-submit-repository',
})
export class SubmitRepositoryComponent {
  @Prop() renderer: import('stencil-apollo').MutationRenderer<
    SubmitRepositoryMutation,
    SubmitRepositoryMutationVariables
  >;
  @Prop() variables: SubmitRepositoryMutationVariables;
  render() {
    return <apollo-mutation mutation={SubmitRepositoryDocument} variables={this.variables} renderer={this.renderer} />;
  }
}
