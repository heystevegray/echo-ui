import { gql } from 'graphql-tag';

export const GetQuotes = gql`
    query GetQuotes {
        quotes(orderBy: { name: asc }) {
            quoteId
            text
            author
            source
        }
    }
`;
