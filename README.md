## Transaction Reports List

A Sample Transactions List Viewer

- Website: [Transaction List ](https://frontend-end-challenge.vercel.app/)
- Graphql Endpoint: [Backend Endpoints ](https://frontend-end-challenge.vercel.app/api/graphql)

## How to run the project locally

Step 1: Clone this repository:

```bash
git clone https://github.com/okeken/frontend-end-challenge.git
```

Step 2: Install dependencies:

```bash
yarn install
```

Step 3: Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![Home](https://github.com/okeken/frontend-end-challenge/blob/main/public/transactions.png?raw=true)

Open [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql) with your browser to open the graphql playground.

![Graphql Explorer](https://github.com/okeken/frontend-end-challenge/blob/main/public/graphqlendpoint.png?raw=true)

## Search Criteria

| Column         | Sample data                                |
| -------------- | ------------------------------------------ |
| Alias          | Don                                        |
| Receiver       | 0x786BfF269d10812Ac61c0c197E3Fc4215cabc3d9 |
| Amount         | 12                                         |
| Status         | Success                                    |
| Type           | Out                                        |
| Transaction ID | 9984df6-2b71-4788-84fc-314599789492        |

```
const sampleData = {
id:"9984df6-2b71-4788-84fc-314599789492",
receiver:"0x786BfF269d10812Ac61c0c197E3Fc4215cabc3d9",
amount:12,
status:"Success",
description:"This is a seed sample data",
created_at:'2022-07-09T10:23:49.779Z',
type:"out",
alias:'Don'
}
```

## Filter By

- Transaction Type: Received | Sent
- Transaction Status: Pending | Success | Failed

Click on the `Received` button to see all the transactions that add value to your account, or click on the `Sent` button to see all transactions that send value to other people from your account. These options are also available on `Type`

Click on the `Pending`, `Success` or `Failed` Button to see the corresponding status of the transactions in your account.

### Sample Search

![Sample Search](https://github.com/okeken/frontend-end-challenge/blob/main/public/searchsample.png?raw=true)

![Search ](https://github.com/okeken/frontend-end-challenge/blob/main/public/transact.png?raw=true)

## Additional Info

This project is bootstrapped with Nextjs. I want to make sure both the frontend and backend run on the same server, since Nextjs has the capacity for a full-stack app, I decided to go with it.

#### Accessible Layout

The Current Layout transactions divs are tabbable and the filter options.

## Challenges

One of the challenges I faced is formating the backend end data such that the frontend can show them grouped by the same date they occur. I solved this by

- Mapping through the data and giving data on the same date a common date
- Group the data by the common date
- Put data with the same date in an array with the key `date` and `data`

code location - `/utils.ts`
function name - `normalizedTxn`

## Additional Features

- Select Element For Filtering: The `Status` and `Type` buttons can be substituted with a select element, such that when a user clicks on `Status` the select options open with `pending`, `success` and `failed` options, a user clicks on an option the select element returns to its normal state, the search operation occurs with the selected option. Same for `Type`
- Pagination: This application can be approved by adding pagination to the list of data to improve UX experience.
- Custom Page Size: Provide a UI for users to customize the page size of the data returning from the backend

## Tools And Packages

- CSS: Tailwind
- Mock data: Fakerjs
- Linting: Prettier
- Cors: Micro Cors
- Search: Fusejs
