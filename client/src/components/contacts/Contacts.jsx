import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import contactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const ContactContext = useContext(contactContext);

  const { contacts, filtered } = ContactContext;

  if (contacts.length === 0) {
    return <h4 className="text-center">Please add a contact</h4>;
  }

  if (filtered && filtered.length === 0) {
    return <h4 className="text-center">No match found</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
