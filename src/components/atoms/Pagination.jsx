import TablePagination from '@mui/material/TablePagination';
import { useState } from 'react';

export const Pagintation = ({ totalPages, currentPage, setCurrentPage }) => {
    
    const [input, setInput] = useState(1)

    const nextPage = () =>{
        setCurrentPage(currentPage + 1)
        setInput(currentPage + 1)
    }
    const prevPage = () =>{
        setCurrentPage(currentPage - 1)
        setInput(currentPage - 1)
    }

  return (
    <>
        <div>
            <button 
                onClick={prevPage}
                disabled={currentPage <= 1} > Atras
            </button>

            <div> {input} de {totalPages} </div>

            <button 
                onClick={nextPage}
                disabled={currentPage >= totalPages} > Adelante 
            </button>
        </div>
    </>
  );
}