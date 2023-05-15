

export default async function fetchGraphQLApi (graphqlQuery:string) {
    const endpoint = "https://rickandmortyapi.com/graphql";
    const headers = {
        "content-type": "application/json",
    };
    const options = {
        "method": "POST",
        "headers": headers,
        "body": JSON.stringify(graphqlQuery)
    };

   return await fetch(endpoint, options).then(res => res.json());
}
