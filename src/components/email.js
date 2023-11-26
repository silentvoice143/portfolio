import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

import emailjs from "emailjs-com";

async function adduser(name, email, message) {
  const service_id = process.env.REACT_APP_SERVICE_ID;
  const template1 = process.env.REACT_APP_TEMPLATE_ID1;
  const template2 = process.env.REACT_APP_TEMPLATE_ID2;
  const public_api = process.env.REACT_APP_PUBLIC_API;

  console.log(service_id);
  const templateParams1 = {
    from_name: "Satyam Kumar",
    reply_to: "silentvoice4143@gmail.com",
    to_email: email,
    message: message,
  };
  const templateParams2 = {
    from_name: name,
    reply_to: email,
    user_name: name,
    message: message,
  };

  try {
    await emailjs.send(service_id, template1, templateParams2, public_api);
    await emailjs.send(service_id, template2, templateParams1, public_api);

    alert("Email sent successfully!");
  } catch (error) {
    alert("Error sending email. Check the console for details.");
    console.error(error);
  }

  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      message: message,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default adduser;
