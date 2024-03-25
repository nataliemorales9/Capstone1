
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// FormsModule is required if the component uses html forms 
import { FormsModule } from '@angular/forms'

// @Component includes the Component in the imports array metadata
@Component({
  selector: 'client-inquiries', // this is the tag used in any page to include this component
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-inquiries.component.html',
  styleUrl: './client-inquiries.component.css'
})
// class defines module containing any data and processing for the component
// export allow outside processes to access this module
export class ClientInquiriesComponent {
  
    // Data used by the component
    // public this variable may be accessed by anything with access to the module
    // public (Access Modifer) is used to define data in a module instead of let/var
    // private is another Access modifier that limits access to code in this module
    // public allows Angular to access the data

    // These variable are connect to input controls in a form via [(NgModel)]
    public fname = "";
    public lname = "";
    public birthDate = "";
    public foodPrefs = "";
    public email = "";
    public email_preference = "";

    // Typically checkbox values are stored array of objects
 // attribute : datatype = initial-value - object with 2 attributes
 // name:  - what is display in the list of choices
 // value: - what is stored when checkbox is checked 

    checkboxes: any[] = [
      { name: 'Gothic Style', value: 'Gothic' },
      { name: 'Modern', value: 'Modern' },
      { name: 'Traditional', value: 'Traditional' },
      { name: 'Craftsman', value: 'Craftsman' },
      { name: 'Greek', value: 'Greek' },
      { name: 'Victorian', value: 'Victorian' },
      { name: 'Italianic', value: 'Italianic' }
    ];

    // a method to process any data accessible to the component
    // this. tells Angular the data is in this component
    onSubmit() {
      console.log(`-----------------------------------------------`)
      console.log(` First name: ${this.fname}`)
      console.log(`  Last name: ${this.lname}`)
      console.log(` Birth Date: ${this.birthDate}`)
      console.log(` Cuisine(s): ${this.foodPrefs}`)
      console.log(`      email: ${this.email}`)
      console.log(`allow email: ${this.email_preference}`)
      console.log(this.checkBoxResult)  // run the method in this component
    }
    // This will be run when "Select All" is chosen to chck all boxes
      CheckAllOptions() {
        // if all checkboxes are checked
        if (this.checkboxes.every((val) => val.checked == true))
          this.checkboxes.forEach((val) => { // Loop through all checkboxes
            val.checked = false;             //    and uncheck them 
          });
        else // if not all checked boxes are checked
          this.checkboxes.forEach((val) => { // Loop through all checkboxes
            val.checked = true;              //     and check them
          });
      }
    
      // return all the checkboxes that are checked
      get checkBoxResult() {
        // .filter() create an array from an array if the arrow returns true for an element
        //           loop thorugh the array given on element at a time
        //           if element is true (it is checked), its included in the resulting array
        //                         false (its not checked), it is not included in the result array
        return this.checkboxes.filter((item) => item.checked);
      }

}
