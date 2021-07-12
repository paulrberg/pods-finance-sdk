import gql from "graphql-tag";
import { PositionWithDependenciesFragment } from "./atoms";

/**
 * -------------------------------------------
 * Other atoms (fragments)
 * -------------------------------------------
 */

export const getByUser = gql`
  query positions($user: Bytes!) {
    positions(where: { user: $user }) {
      ...PositionWithDependenciesFragment
    }
  }
  ${PositionWithDependenciesFragment}
`;

export const getByUserAndOption = gql`
  query positions($user: Bytes!, $option: Bytes!) {
    positions(where: { user: $user, option: $option }) {
      ...PositionWithDependenciesFragment
    }
  }
  ${PositionWithDependenciesFragment}
`;

export const getByUserAndOptions = gql`
  query positions($user: Bytes!, $options: [Bytes!]!) {
    positions(where: { user: $user, option_in: $options }) {
      ...PositionWithDependenciesFragment
    }
  }
  ${PositionWithDependenciesFragment}
`;
