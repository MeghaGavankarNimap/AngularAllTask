import { CanMatchFn } from '@angular/router';

export const moduleGuard: CanMatchFn = (route, segments) => {
  return true;
};
