const createContact = () => {
  const content = document.querySelector("#content");

  const contact = document.createElement("div");
  contact.classList.add("hero");

  const contactText = document.createElement("div");
  contactText.classList.add("hero-text");
  contact.appendChild(contactText);

  const phone = document.createElement("h2");
  phone.textContent = "☎️ 0123 456 789";
  contactText.appendChild(phone);

  const email = document.createElement("h2");
  email.textContent = "📧 reservation@sushi.com";
  contactText.appendChild(email);

  const address = document.createElement("h2");
  address.textContent = "1 Yummy Street, Delicious, Sushi";
  contactText.appendChild(address);

  const contactImage = document.createElement("img");
  contactImage.src = "../src/contact.jpg";
  contactImage.classList.add("hero-image");
  contact.appendChild(contactImage);

  content.appendChild(contact);
};

export default createContact;
