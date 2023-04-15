# Wypożczyczalnia sprzętu budowlanego

Projekt pomaga w zarządzaniu wypożyczalnią urządzeń budowlanych. Pokazuje ofertę produktów, dostępne terminy w kalendarzu, daje możliwość rezerwacji oraz generuje umowę najmu z możliwością jej wydrukowania, oraz wysyła wiadomość email potwierdzającą złożenie zamówienia. 

The project helps to order construction equipment rental. It shows the offer of products, their availability in the calendar, gives the option of booking and generates a rental agreement with the option of printing, and sends an email confirming the order.

## Demo

[Strona testowa / Test page](https://wypozyczalnia.wrobud.usermd.net)


## Tech Stack

**Client:** React, Bootstrap, Flatpickr, AutoCompleteJS, Lazysizes, ReactToPrint

**Server:** Node, Express, MongoDb, Mongoose, Nodemailer

## API Reference

#### Get all products and rental localizations

```http
  GET /api/products-localizations
```

#### Get contract

```http
  GET /api/umowa/${id}
```

| Parameter           | Type     | Description                                 |
| :-------------------| :------- | :------------------------------------------ |
| `id`                | `string` | **Required**. ObjectId of contract to fetch |

#### Set contract

```http
  POST /api/${name}/${productId}/najem
```

| Parameter        | Type     | Description                                |
| :--------------- | :------- | :----------------------------------------- |
| `name`           | `string` |                                            |
| `productId`      | `string` | **Required**. ObjectId of product to fetch |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE`

`USERMAIL`

`PASSMAIL`

`FROMMAIL`

`MAILHOST`

`OWNERMAIL`

`COMPLAINTNUMBERID`


