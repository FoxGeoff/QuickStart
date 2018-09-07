import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {ErrorObserver, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


//import { Observable } from 'rxjs/Observable'
//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
//import { of } from 'rxjs/observable/of';

import { catchError, tap } from 'rxjs/operators';

import { Course } from './../courses/course';

@Injectable()
export class CourseService {
    private coursesUrl = 'api/courses';

    constructor(private http: HttpClient) { }

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.coursesUrl)
        .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    getCourse(id: number): Observable<Course> {
        if (id === 0) {
            return of(this.initializeCourse());
        }
        const url = `${this.coursesUrl}/${id}`;
        return this.http.get<Course>(url)
            .pipe(
                tap(data => console.log('Data: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    saveCourse(product: Course): Observable<Course> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        if (product.id === 0) {
            return this.createCourse(product, headers);
        }
        return this.updateCourse(product, headers);
    }

    deleteCourse(id: number): Observable<Course> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        const url = `${this.coursesUrl}/${id}`;
        return this.http.delete<Course>(url, { headers: headers })
            .pipe(
                tap(data => console.log('deleteCourse: ' + id)),
                catchError(this.handleError)
            );
    }

    private createCourse(product: Course, headers: HttpHeaders): Observable<Course> {
        product.id = null;
        return this.http.post<Course>(this.coursesUrl, product, { headers: headers })
            .pipe(
                tap(data => console.log('createCourse: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private updateCourse(product: Course, headers: HttpHeaders): Observable<Course> {
        const url = `${this.coursesUrl}/${product.id}`;
        return this.http.put<Course>(url, product, { headers: headers })
            .pipe(
                tap(data => console.log('updateCourse: ' + product.id)),
                catchError(this.handleError)
            );
    }

    private initializeCourse(): Course {
        // Return an initialized object
        return {
            'id': 0,
            productName: '',
            productCode: '',
            category: '',
            tags: [],
            releaseDate: '',
            price: 0,
            description: '',
            starRating: 0,
            imageUrl: ''
        };
    }

    private handleError(err: HttpErrorResponse): ErrorObservable {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
        }
        console.error(err);
        return new ErrorObservable(errorMessage);
    }

}
