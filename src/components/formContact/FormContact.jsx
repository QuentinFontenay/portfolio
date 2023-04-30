import React, { useState } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { Section } from '../../styles/GlobalComponents';
import {
  Box,
  BoxTitle,
  BoxTitle2,
  LeftContent,
  ContactBox,
  ContactForm,
  Recieved,
} from './FormContactStyles';
import useForm from './useForm';
import Button from '../../styles/GlobalComponents/Button';

function FormContact() {
  const [submitted, setSubmitted] = useState(false);
  const { formData, errors, handleInput, isFormValid } = useForm();
  const sendEmail = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const { replyto, name, message } = formData;
    const raw = JSON.stringify({ replyto, name, message });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      await fetch(process.env.REACT_APP_FORMSPREE_LINK, requestOptions);
      setSubmitted(true);
    } catch (e) {
      setSubmitted(false);
    }
  };
  return (
    <Section>
      <Box>
        <BoxTitle>Status</BoxTitle>
        <BoxTitle2>Disponible</BoxTitle2>
      </Box>
      <ContactBox>
        {submitted && (
          <Recieved>
            <FaHandshake style={{ fontSize: '7em', marginTop: '8rem' }} />
            <p>
              Votre message a été recu avec succés. Je reviens vers vous le plus
              rapidement possible. Merci de m&rsquo;avoir contactez
            </p>
          </Recieved>
        )}
        {!submitted && (
          <LeftContent>
            <FaHandshake style={{ fontSize: '5em' }} />
            <p>Au plaisir de discuter avec vous !</p>
          </LeftContent>
        )}
        {!submitted && (
          <ContactForm>
            <label className="label__email" htmlFor="email">
              <span>Email</span>
              <input
                className={errors.replyto && 'invalid'}
                onChange={handleInput}
                value={formData.email}
                id="email"
                name="replyto"
                type="email"
                required
                placeholder="example@gmail.com"
              />
            </label>
            <label className="label__name" htmlFor="name">
              <span>Nom</span>
              <input
                className={errors.name && 'invalid'}
                onChange={handleInput}
                value={formData.name}
                id="name"
                name="name"
                type="text"
                required
                placeholder="Michel Dupont"
              />
            </label>
            <label className="label__message" htmlFor="message">
              <span>Message</span>
              <textarea
                className={errors.message && 'invalid'}
                onChange={handleInput}
                value={formData.message}
                id="message"
                name="message"
                required
                placeholder="Ajoutez votre commentaire"
              />
            </label>

            <Button
              disabled={!isFormValid}
              onClick={(e) => {
                e.preventDefault();
                sendEmail();
              }}
            >
              Envoyer
            </Button>
          </ContactForm>
        )}
      </ContactBox>
    </Section>
  );
}

export default FormContact;
