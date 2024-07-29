import { ValidatorConstraint, ValidationOptions, registerDecorator } from 'class-validator';

export function IsCPF(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCpf',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value || typeof value !== 'string') {
            return false;
          }

          // Remove characters not numérics
          const cpfClean = value.replace(/\D/g, '');

          // Verify if CPF has 11 digits
          if (cpfClean.length !== 11) {
            return false;
          }

          // Verify every digits
          if (/^(\d)\1{10}$/.test(cpfClean)) {
            return false;
          }

          // Sum of digits
          let sum = 0;
          for (let i = 0; i < 9; i++) {
            sum += parseInt(cpfClean.charAt(i)) * (10 - i);
          }
          let remainder = (sum * 10) % 11;
          if (remainder === 10 || remainder === 11) {
            remainder = 0;
          }
          if (remainder !== parseInt(cpfClean.charAt(9))) {
            return false;
          }

          sum = 0;
          for (let i = 0; i < 10; i++) {
            sum += parseInt(cpfClean.charAt(i)) * (11 - i);
          }
          remainder = (sum * 10) % 11;
          if (remainder === 10 || remainder === 11) {
            remainder = 0;
          }
          if (remainder !== parseInt(cpfClean.charAt(10))) {
            return false;
          }

          return true;
        }
      }
    });
  };
}
