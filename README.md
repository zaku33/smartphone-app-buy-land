<p align="center"> This app is base on : https://github.com/fariasmateuss/BeTheHero/commits/master <p>
<p align="center">
  <img src="mobile/src/assets/logo@3x.png" />
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/fariasmateuss/BeTheHero">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/fariasmateuss/BeTheHero">
  
  <a href="https://github.com/fariasmateuss/BeTheHero/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fariasmateuss/BeTheHero">
  </a>

  <a href="https://github.com/fariasmateuss/BeTheHero/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/fariasmateuss/BeTheHero">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>
 
<p align="center">
  App to help NGOs built with ReactJS, React Native, Laravel and more. 
</p>

<img src=".github/bethehero.png" />

<p align="center">
  Landtrader is a project that aims to connect people who want to make monetary 
  contributions to NGOs (non-governmental organizations) that need help.
</p>

## Tech

- Laravel
- React
- React Native
- Expo
- MySQL
- Jest

## Development setup

### Api
- Run `composer install` in the `api` folder;
- Run `php artisan migrate` to migrate data;
- Run `php artisan passport:install` to install passport auth_client
- Run `php artisan serve --host {ip_address} --port {port}` to start server , which {ip_address} and {port} will use for axios connect to. 

### Front-End 
- Run `yarn` in the `frontend` folder;
- Run `yarn start` to up the project;

### Mobile 
- Run `yarn` in the `mobile` folder;
- Update the baseURL at src/services/api.js.
- Run `expo start` to up the project.

### Test
- Run `yarn test:backend` at the backend folder;
  
## Contribution

See the [contribution guide](CONTRIBUTING.md) for more details on how to contribute to this project.

# License
[MIT License](/LICENSE)
