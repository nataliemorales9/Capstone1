/***************************************************************
 This is service

 A service is a set of processing to facilitate the retrieval
 and storage of data - typically in a persistent source (saved)

 May do other processing as well

 This service DOES not save the data to a persitent source

 The data from this service is just an array in memory

*******************************************************************/

import { Injectable}   from '@angular/core'; // Access Angular Dependency Injection
import { ClientInfo }  from './clientinfo';  // Using the MoviesInfo interface

// @Injectable tells Angular that this service may be Dependency Injection
@Injectable({
  providedIn: 'root'
})

export class ClientService {

  // A module contains data and methods/functions for processin that daat

  // Source of data for calls to retrieve the data - initialized in the code
  private listOfClients : ClientInfo[] = []  // An array of MovieInfo objects

  // These variables keep track of if we should sort in ascending order or not
  private NameSortAsc    : boolean = true;
  private dateSortAsc     : boolean = true;
  private ConsultantSortAsc : boolean = true;

  // a contructor is method to initialized data defined in the module
  // it is executed automatically when the service is loaded
  // Here we use the constructor to initialize our data source
  constructor() { 
    this.listOfClients.push({name: "Ariana Grande"     , inquiryYear: 2019, consultant: "Justin"})
    this.listOfClients.push({name: "Rihanna"           , inquiryYear: 2022, consultant: "Justin"})
    this.listOfClients.push({name: "George Washington" , inquiryYear: 2023, consultant: "Frank"})
    this.listOfClients.push({name: "Franklin Noseevelt", inquiryYear: 2024, consultant: "Natalie"})
  }

  // methods others may use to interact with our service

  // This method will return the current data in our data source (listOfMovies)
  //  name(parameters) : return-type-of-data-returned
      getClientList()  : ClientInfo[] {  // this function returns a MoviesInfo array
        return this.listOfClients;
      }
  // This method will receive a MoviesInfo object and add it to our data source (listOfMovies)
      addMovies(newClient : ClientInfo) {      
        console.table(newClient)          // optional - verify new movie data
        this.listOfClients.push(newClient) // store the movie in the data source
        console.table(this.listOfClients) // optional - verify new movie was added to the array
      }


  // Sort List of movies by title
     sortByName() { 
        this.NameSortAsc ? this.listOfClients.sort(this.compareNameAsc)
                          : this.listOfClients.sort(this.compareNameDesc)
        
        // The ! is the not operator - flips true to false and vice versa
        this.NameSortAsc = !this.NameSortAsc   // reverse the sort ascending variable               
     }
 
  // Sort List of movies by director
  // .sort() will sort an array 
  // it will walk through the array multiple times comparing two elements
  // it requires a call back method to tell it how the two elements relate (>, =, <)
  // a "compare function" or "caparator" to tell it how elements related
  // the compare function returns 0 if they are equal, 
        // less than 0 if first is less than second,
        // and greater than 0 if the first is greater than the second
        //
    // Not use of conditional operator ?
    //    Conditional operator is a shorthand if-else
    //
    //    condition ? process-if-true : process-if-false
    //
    // Primary use is to allow conditional processing when an if-else cannot be coded
    // i.e. when conditional parameters are required by a method 
    //
    // In the example below:
    // 
    //  if (this.directorSortAsc === true) {
    //                                    this.listOfMovies.sort(this.compareDirectorAsc)
    //                                    }
    //  else {
    //        this.listOfMovies.sort(this.compareDirectorDesc)
    //        }
    
    sortByConsultant() { 
        this.ConsultantSortAsc ? this.listOfClients.sort(this.compareConsultantAsc)
                             : this.listOfClients.sort(this.compareConsultantDesc);

        this.ConsultantSortAsc = !this.ConsultantSortAsc;                     
  }

    // Sort List of movies by director
    sortByInquiryYear() { 
        this.dateSortAsc ? this.listOfClients.sort(this.compareInquiryYearAsc)
                         : this.listOfClients.sort(this.compareInquiryYearDesc);

        this.dateSortAsc = !this.dateSortAsc                 
} 
// This is a compare function used to sort
// It receives two MoviesInfo objects
     compareNameAsc(a : ClientInfo, b : ClientInfo) {
        if (a.name < b.name) return -1;   // first is < second, return a negative
        if (a.name > b.name) return 1;    // first is > second, return a positive
        return 0;                           // otherwise, return a 0 since they are =
    }  

    compareNameDesc(a : ClientInfo, b : ClientInfo) {
      if (a.name > b.name) return -1;     // first is > second, return a negative
      if (a.name < b.name) return 1;      // first is < second, return a positive
      return 0;                             // otherwise 0 since they are equal
  }  

    compareInquiryYearAsc(a : ClientInfo, b : ClientInfo) {
      if (a.inquiryYear < b.inquiryYear) return -1;
      if (a.inquiryYear > b.inquiryYear) return 1;
      return 0;
      // Alternate code: return a - b // if a > b, result is positive. If < b result is negative
    }  

    compareInquiryYearDesc(a : ClientInfo, b : ClientInfo) {
      if (a.inquiryYear > b.inquiryYear) return -1;
      if (a.inquiryYear < b.inquiryYear) return 1;
      return 0;
      // Alternate code: return b - a // if b > a, result is positive. If < a result is negative
    } 

    compareConsultantAsc(a : ClientInfo, b : ClientInfo) {
      if (a.consultant < b.consultant) return -1;
      if (a.consultant > b.consultant) return 1;
      return 0;
    }  
    compareConsultantDesc(a : ClientInfo, b : ClientInfo) {
      if (a.consultant > b.consultant) return -1;
      if (a.consultant < b.consultant) return 1;
      return 0; 
    }  
}
