import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { eraseContact, findContact } from "../api/contactApi.mjs";

import TitleH1 from "./TitleH1.jsx";
import FieldButton from "./FieldButton.jsx";
import LinkButton from "./LinkButton.jsx";

import styles from "./DeleteContact.module.css";


const DeleteContact = () => {

	const params = useParams();
	const navigate = useNavigate();
	const [contact, setContact] = useState({});
	const [messageFlag, setMessageFlag] = useState("idle");

	useEffect(() => {
		const contact = findContact(params.id);
		contact.then((result) => {
			setContact(result.data);
		}); 
	}, []);

	if (contact === null) {
		return (
			<p>Loading...</p>
		);
	};

	const handleErase = () => {
		const result = eraseContact(contact);
		result.then((data) => {
			if (data.status === 200) {
				setMessageFlag("success");
			} else {
				setMessageFlag("error");
			}
		})
		.catch((err) => {
			console.log(err);
		});
	};

	const handleCancel = () => {
		navigate("/contact");
	};

	return (
		<>
			<TitleH1 title="Borrar contacto"/>
			<div className={styles.eraseContainer}>
				<p className={styles.text}>¿Desea borrar el contacto {contact.name}?</p>
				<div className={styles.buttonContainer}>
					{
						(messageFlag === "idle") ? (
							<>
								<FieldButton text="Si" type="button" onClick={handleErase}/>
								<FieldButton text="No" type="button" onClick={handleCancel}/>
							</>
						) :
						(messageFlag === "success") ? (
							<div className={styles.messageContainer}>
								<p className={styles.successMessage}>Contacto Eliminado</p>
								<LinkButton page="/contact" text="Volver"/>
							</div>
						) :
						(messageFlag === "error") ? (
							<div className={styles.messageContainer}>
								<p className={styles.errorMessage}>Hubo un error!!</p>
								<LinkButton page="/contact" text="Volver"/>
							</div>
						) : (null)
					}
				</div>
			</div>
		</>
	);
};

export default DeleteContact;