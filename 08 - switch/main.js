const validation = 'ADMIN';

switch(validation) {
  case 'ADMIN':
    console.log('TIENE PERMISOS DE ADMINISTRADOR');
    break;
  case 'DEVELOPER':
    console.log('TIENE PERMISOS DE DESARROLLADOR');
    break;
  case 'TESTER':
    console.log('TIENE PERMISOS DE TESTER');
    break;
  default:
    console.log('TIENE PERMISOS DE UN USUARIO');
    break;
}