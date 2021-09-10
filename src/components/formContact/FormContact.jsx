import { React, useState } from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, BoxTitle, BoxTitle1, BoxTitle2, LeftContent, ContactBox, ContactForm, Recieved } from './FormContactStyles';
import useForm from "./useForm"
import { FaHandshake, FiSend } from "react-icons/all"
import Button from '../../styles/GlobalComponents/Button';

function FormContact() {
    const [submitted, setSubmitted] = useState(false)
    const { formData, errors, handleInput, isFormValid } = useForm()
    const sendEmail = async () => {
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const { _replyto, name, message } = formData
        const raw = JSON.stringify({ _replyto, name, message })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        }

        try {
            await fetch("***REMOVED***", requestOptions)
            setSubmitted(true)
        } catch (e) {
            setSubmitted(false)
        }
    }
    return (
        <Section>
            <SectionDivider />
            <SectionTitle main>Formulaire de contact</SectionTitle>
            <Box>
                <BoxTitle>Status</BoxTitle>
                <BoxTitle2>Disponible</BoxTitle2>
            </Box>
            <ContactBox>
                {submitted && (
                    <Recieved>
                        <FaHandshake style={{ fontSize: "7em", marginTop: "8rem" }} />
                        <p>
                            Votre message a été recu avec succés. Je reviens vers vous le plus
                            rapidement possible. Merci de m'avoir contact
                        </p>
                    </Recieved>
                )}
                {!submitted && (
                    <LeftContent>
                        <FaHandshake style={{ fontSize: "5em" }} />
                        <p>Au plaisir de discuter avec vous !</p>
                    </LeftContent>
                )}
                {!submitted ? (
                    <ContactForm>
                        <label className="label__email">
                            <span>Email</span>
                            <input
                                className={errors._replyto && "invalid"}
                                onChange={handleInput}
                                value={formData.email}
                                id="email"
                                name="_replyto"
                                type="email"
                                required
                                placeholder="example@gmail.com"
                            />
                        </label>
                        <label className="label__name">
                            <span>Nom</span>
                            <input
                                className={errors.name && "invalid"}
                                onChange={handleInput}
                                value={formData.name}
                                name="name"
                                type="text"
                                required
                                placeholder="Michel Dupont"
                            />
                        </label>
                        <label className="label__message">
                            <span>Message</span>
                            <textarea
                                className={errors.message && "invalid"}
                                onChange={handleInput}
                                value={formData.message}
                                name="message"
                                required
                                placeholder="Ajoutez votre commentaire"
                            />
                        </label>

                        <Button
                            disabled={!isFormValid}
                            // className="submit__btn"
                            // as="button"
                            onClick={e => {
                                e.preventDefault()
                                sendEmail()
                            }}
                        >
                            Envoyer
                        </Button>
                    </ContactForm>
                ) : (
                    <div></div>
                )}
            </ContactBox>
        </Section>
    );
}

export default FormContact;