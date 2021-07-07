## Laravel Api setup
It's a very simple classic API that simulates the endpoints needed for VUEX in order to persist data into the SPA after reloading.

### Install composer dependencies
```
cd backend
composer install
```
### Database Migrations
After installing composer dependencies, add your database credentials in `.env` file and then run migrations.
```
php artisan migrate
```
Let's generate some dummy products defined within `ProductSeeder`. Using `db:seed`.
```
php artisan db:seed
```
Now, run `artisan serve` command. It will run the application at `http://127.0.0.1:8000` URL, and that URL path used in the Vuex source code.
```
php artisan serve
```
If you are running the Laravel API on a different URL path, then you need to update the URL path in the `frontend/src/api/index.js`.

## Vuex Project setup
```
cd frontend
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
