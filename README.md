# QuickStart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Check: Add Bootstrap
npm i bootstrap --save, npm i jquery --save, npm popper.js --save
Note: for Angular 6.x use in angular.json:
* https://stackoverflow.com/questions/50280975/jquery-not-working-in-angular-6-error-enoent-no-such-file-or-directory-open
```
"styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css" 
            ],
            "scripts": [   
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/popper.js/dist/umd/popper.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```
## Check: Add Font Awesome Icons
In the index.html file:
* ``` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">```

## Check: Add app-routing.module

## Check: Add page not found

## Check: Add Course model

## Check: Add course module

## Check: Add CourseList and CourseDetail Components

## Check: Add CourseService

## Check: Add CourseEdit Component

## Check: Fix CourseService

## Check: Add CourseEdit Guard

* Task: Add course list and detail pages - in work.


## Angular Ref:
* https://www.sitepoint.com/ultimate-angular-cli-reference/

