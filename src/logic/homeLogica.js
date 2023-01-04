import { onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../firebase/configuracionFirebase.js';

export const homeLogica = (contenedor) => {
    // Cerrar sesion
    const botonCerrarSesion = contenedor.querySelector('#cerrarSesion');
    botonCerrarSesion.addEventListener('click', () => {
        console.log('estas haciendo clic');
        // window.location.href = 'bienvenida';
        // auth.signOut();
        /*signOut(auth).then(() => {
        // Sign-out successful.
            // sessionStorage.removeItem('token');
            console.log('ya saliste');
            window.location.href = 'bienvenida';
        }).catch((error) => {
            console.log(error);
        // An error happened.
        });*/
    });

    // Metodo onAuthStateChanged - Obtener el usuario que ha iniciado sesión actualmente
    onAuthStateChanged(auth, (user) => {
        if (user) { // User is signed in
            console.log(user);
            const uid = user.uid;
            console.log(uid);
            const displayName = user.displayName;
            console.log(displayName);
            const username = user.username;
            console.log(username);
            const email = user.email;
            const photoURL = user.photoURL;
            const tokenUsuario = user.accessToken;
            // console.log(tokenUsuario);
        } else {
            // User is signed out
            window.location.href = 'bienvenida';
        }
    });

    // Metodo current user - Obtener perfil de usuario
        /*const user = auth.currentUser;
        console.log(user);
        if (user !== null) {
            
        } else {
        // No user is signed in.
            // window.location.href = 'bienvenida';
    }*/
};
