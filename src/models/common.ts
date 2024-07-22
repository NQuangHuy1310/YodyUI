export interface route {
    path: string
    element: React.ComponentType
    layout: React.ComponentType<any>
    children?: route[]
}
export interface ILoginForm {
    email: string;
    password: string;
    remember?: boolean;
  } 
export interface IRegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  