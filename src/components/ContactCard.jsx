import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore"
import {db} from "../config/firebase"
import { useState } from 'react';
import AddAndUpdatedContact from './AddAndUpdatedContact';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();
   
  const deleteContact = async (id) => {
     try {
       await deleteDoc(doc(db, "contacts", id));
       toast.success("Contact deleted successfully!");
     } catch (error) {
      console.log(error)
     }
   }

  return (
    <>
      <div className='flex p-2 rounded-lg justify-between bg-yellow items-center mt-4'>
      <div className="flex gap-2">
        <HiOutlineUserCircle className='text-4xl text-orange' />
        <div className="">
          <h2 className='font-medium'>{contact.name}</h2>
          <p className='text-sm'>{contact.email}</p>
        </div>
      </div>
      <div className='flex text-3xl'>
        <RiEditCircleLine isUpdate className="cursor-pointer" onClick={onOpen} />
        <IoMdTrash onClick={()=> deleteContact(contact.id)} className='text-orange cursor-pointer' />
      </div>
      </div>
      <AddAndUpdatedContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose} />
    </>
    

    
  );
};

export default ContactCard;