/*import { ValidatorFn, AbstractControl } from "@angular/forms";
export function CFVal (control: AbstractControl):{[key: string]: boolean}  {
     
    //Grab pwd and confirmPwd using control.get
    const fiscalCode = control.get('fiscalCode');
    //const calculatedCF = control.get('cf');

    console.log("NEL VALIDATORE " + fiscalCode.value + " " );
       
   /* // If FormControl objects don't exist, return null
    if (!pwd || !confirmPwd) return null;*/
     
    //If they are indeed equal, return null
   /* if (fiscalCode.value == calculatedCF.value) {
      return null;
    }*/
   //Else return false
   /*return {
      mismatch: true };
   }*/

   /*export function passwordMatch (control: AbstractControl):{[key: string]: boolean}  {
     
    //Grab pwd and confirmPwd using control.get
    const pwd = control.get('password');
    const confirmPwd = control.get('confirmPassword');
       
   /* // If FormControl objects don't exist, return null
    if (!pwd || !confirmPwd) return null;*/
     
    //If they are indeed equal, return null
   /* if (pwd.value === confirmPwd.value) {
      return null;
    }
   //Else return false
   return {
      mismatch: true };
   }

/*export function cfValidator(control: FormControl) { 
    console.log("NEL VALIDATOR " + this.data.fiscalCode.substring(0,15));
    if (!(this.data.fiscalCode.substring(0,15) == this.cf.code.substring(0,15))) {
        return { 'notValidCF': true };
    }
    return null; 
  }*/


/*export function CFValidator(/*calculatedCF: string, userCF: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        console.log("NEL VALIDATOR " +  this.cf.code.substring(0,15));
        if (control.value !== undefined && (!(control.get('fiscalCode').value.substring(0,15) == this.cf.code.substring(0,15)))) {
            return { 'notValidCF': true };
        }
        return null;
    };
}*/

