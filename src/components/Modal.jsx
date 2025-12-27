import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ onClose, isOpen, children }) => {

     return createPortal(
          < >
               {isOpen &&
                    <div className='grid place-items-center absolute top-0 z-40  h-screen w-screen backdrop-blur'>
                    <div className='m-auto top-0 relative z-50 min-h-[200px] max-w-[95%] bg-white p-4'>
                              <div className='flex justify-end '>
                                   <AiOutlineClose onClick={onClose} className='self-end text-2xl' />
                              </div>
                         {children}
                         </div>
                    </div>
               }
          </>
          ,
          document.getElementById("modal-root"))
}

export default Modal