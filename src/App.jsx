import React from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdatedContact from './components/AddAndUpdatedContact';
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer } from 'react-toastify';
import NotFoundContact from './components/NotFoundContact';
const App = () => {

  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
        try {
          const contactsRef = collection(db, "contacts");
 
          onSnapshot(contactsRef, (snapshot) => {
              const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(), 
            }
          });
            setContacts(contactLists);
            return contactLists;
          })

          
        } catch (error) {
          console.log(error);
        }
    }
    
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
 
          onSnapshot(contactsRef, (snapshot) => {
              const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(), 
            }
              });
            const filteredContacts = contactLists.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()));
            setContacts(filteredContacts);
            return filteredContacts;
          })
  }

  return (
    <>
       <div className='max-w-[370px] mx-auto px-4 bg-orange min-h-[99vh] rounded'>
      <Navbar />
      <div className="flex">
        <div className='flex relative items-center flex-grow'>
        <FiSearch className='ml-2 absolute text-2xl text-white' />
        <input onChange={filterContacts} type="text" className='border-white border h-9 rounded-md flex-grow bg-transparent text-white pl-9' />
        </div>
        <AiFillPlusCircle className='text-white text-5xl cursor-pointer' onClick={onOpen}/>
      </div>
      <div className='mt-4'>
        { contacts.length<1 ? <NotFoundContact/> :  contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />)
        )}
      </div>
      </div>
      <AddAndUpdatedContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position='bottom-center' />
    </>
    
    
  )
}

export default App