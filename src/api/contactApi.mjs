import { api } from "./api.mjs";

export const findAllContacts = () => {
  const listContacts = api({
    method: "GET",
    url: "/users"
  });
  return listContacts;
};

export const registerUser = (userData) => {
  const result = api({
    method: "POST",
    url: "/posts",
    data: JSON.stringify(userData),
    headers: {
      "content-type": "application/json"
    }
  });
  return result;
};

export const editContact = (contact) => {
  const result = api({
    method: "PUT",
    url: "/posts/1",
    data: JSON.stringify(contact),
    headers: {
      "content-type" : "application/json"
    }
  });
  return result;
};

export const eraseContact = (contact) => {
  const result = api({
    method: "DELETE",
    url: "/posts/1",
    data: JSON.stringify(contact),
    headers: {
      "content-type": "application/json"
    }
  });
  return result;
};

export const findContact = (contactId) => {
  const contact = api({
    method: "GET",
    url: `/users/${contactId}`
  });
  return contact;
};
  