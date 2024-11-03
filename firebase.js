// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage"; 

// const firebaseConfig = {
//   apiKey: "AIzaSyB1CYZsyFLuXFhSQFzIVPQEJKvPp1_4H5w",
//   authDomain: "first-project-e456d.firebaseapp.com",
//   projectId: "first-project-e456d",
//   storageBucket: "first-project-e456d.appspot.com", 
//   messagingSenderId: "628580971898",
//   appId: "1:628580971898:web:a351be2638a8f51a7252c3",
//   measurementId: "G-8XMF7J2D4H"
// };




// const firebaseApp = initializeApp(firebaseConfig);







// const db = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

// export { db, storage };



// src/firebase.js

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth"; 

// const firebaseConfig = {
//   apiKey: "AIzaSyB1CYZsyFLuXFhSQFzIVPQEJKvPp1_4H5w",
//   authDomain: "first-project-e456d.firebaseapp.com",
//   projectId: "first-project-e456d",
//   storageBucket: "first-project-e456d.appspot.com",
//   messagingSenderId: "628580971898",
//   appId: "1:628580971898:web:a351be2638a8f51a7252c3",
//   measurementId: "G-8XMF7J2D4H"
// };


// const firebaseApp = initializeApp(firebaseConfig);


// const db = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);
// const auth = getAuth(firebaseApp); 

// export { db, storage, auth }; 




// src/firebase.js

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; 
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage"; 

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY", 
//   authDomain: "YOUR_AUTH_DOMAIN", 
//   projectId: "YOUR_PROJECT_ID", 
//   storageBucket: "YOUR_STORAGE_BUCKET", 
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID", 
//   appId: "YOUR_APP_ID", 
//   measurementId: "YOUR_MEASUREMENT_ID" 
// };


// const firebaseApp = initializeApp(firebaseConfig);


// const db = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);
// const auth = getAuth(firebaseApp); 

// export { db, storage, auth }; 

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; 
// import { getFirestore } from "firebase/firestore"; 
// import { getStorage } from "firebase/storage"; 

// const firebaseConfig = {
//   apiKey: "YOUR_VALID_API_KEY", 
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID" 
// };


// const firebaseApp = initializeApp(firebaseConfig);


// const db = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);
// const auth = getAuth(firebaseApp); 

// export { db, storage, auth }; 

// src/firebase.js



// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; // Import Auth
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyB1CYZsyFLuXFhSQFzIVPQEJKvPp1_4H5w",
//   authDomain: "first-project-e456d.firebaseapp.com",
//   projectId: "first-project-e456d",
//   storageBucket: "first-project-e456d.firebasestorage.app",
//   messagingSenderId: "628580971898",
//   appId: "1:628580971898:web:a351be2638a8f51a7252c3",
//   measurementId: "G-8XMF7J2D4H"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// // Initialize Firebase services
// const auth = getAuth(firebaseApp); // Initialize Auth
// const db = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

// export { auth, db, storage };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1CYZsyFLuXFhSQFzIVPQEJKvPp1_4H5w",
  authDomain: "first-project-e456d.firebaseapp.com",
  projectId: "first-project-e456d",
  storageBucket: "first-project-e456d.firebasestorage.app",
  messagingSenderId: "628580971898",
  appId: "1:628580971898:web:a351be2638a8f51a7252c3",
  measurementId: "G-8XMF7J2D4H"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage };
