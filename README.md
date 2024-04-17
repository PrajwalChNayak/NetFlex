# NetFlex


NetFlex is a flexible and versatile network service library for Angular applications. It provides a convenient way to make HTTP requests with support for various data formats and authentication methods.

## Features

- Support for sending both JSON data and form data in HTTP requests.
- Seamless integration with Angular applications.
- Flexible authentication options, including token-based authentication.
- Easy-to-use API for making HTTP requests with minimal configuration.
- Extensive error handling and logging capabilities.

## Installation

You can install NetFlex via npm:

```bash
npm install netflex

Usage

Import the NetworkService from NetFlex into your Angular application:

import { NetworkService } from 'netflex';

Making HTTP Requests
Sending JSON Data

import { NetworkService } from 'netflex';

const networkService = new NetworkService();

const payload = {
  demo: 'demo@gmail.com',
  pass: '12345'
};

const token = 'user_token_here';

networkService.post('https://example.com/api/endpoint', payload, token).subscribe(response => {
  console.log(response);
});

Sending Form Data

import { NetworkService } from 'netflex';

const networkService = new NetworkService();

const formData = new FormData();
formData.append('name', 'John');
formData.append('email', 'john@example.com');

const token = 'user_token_here';

networkService.post('https://example.com/api/endpoint', formData, token, true).subscribe(response => {
  console.log(response);
});




