

const jsonObject = [
    {
      "id": 1,
      "openDate": "2019-07-13T07:58:36Z",
      "serviceQuote": {
        "id": 1
      },
      "customer": {
        "id": 1
      },
      "ticketCategory": "Equipment Support",
      "machine": {
        "id": 1
      },
      "assignee": {
        "id": 1
      },
      "status": "Created",
      "serviceLog": {
        "id": 1
      },
      "description": null,
      "assigner": null,
      "closeDate": null
    },
    {
      "id": 2,
      "openDate": "2019-07-13T08:04:25Z",
      "serviceQuote": null,
      "customer": {
        "id": 1
      },
      "ticketCategory": "Equipment Support",
      "machine": {
        "id": 1
      },
      "assignee": {
        "id": 2
      },
      "status": "Created",
      "serviceLog": {
        "id": 2
      },
      "description": null,
      "assigner": null,
      "closeDate": null
    },
    {
      "id": 3,
      "openDate": "2019-07-13T08:08:19Z",
      "serviceQuote": null,
      "customer": {
        "id": 3
      },
      "ticketCategory": "Installation",
      "machine": null,
      "assignee": {
        "id": 1
      },
      "status": "Created",
      "serviceLog": null,
      "description": null,
      "assigner": null,
      "closeDate": null
    },
    {
      "id": 4,
      "openDate": "2019-07-13T08:09:04Z",
      "serviceQuote": null,
      "customer": {
        "id": 1
      },
      "ticketCategory": "Audit Survey",
      "machine": null,
      "assignee": {
        "id": 1
      },
      "status": "Created",
      "serviceLog": null,
      "description": null,
      "assigner": null,
      "closeDate": null
    }
];

console.log(jsonObject[2].id);

  let assignedTickets = {};

  for(let i = 0; i < jsonObject.length; i++ ) {
    if( jsonObject[i].assignee == 1) {
        assignedTickets.serviceTicketId = jsonObject[i].id;
        assignedTickets.ticketCategoryId = jsonObject[i].ticketCategory;
    }
  }

  console.log(assignedTickets.serviceTicketId);


