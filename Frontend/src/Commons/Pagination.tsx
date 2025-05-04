import { FC } from 'react';
import { PaginationContainer, PageButton } from './StyledCommons/StyledPagination';
import isDarkMode from '../Interface/General/isDarkMode';

interface PaginationProps extends isDarkMode {
  currentPage: number;
  totalPages: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  isDarkMode 
}) => {
  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Render page buttons
  return (
    <PaginationContainer>
      <PageButton 
        isDarkMode={isDarkMode}
        onClick={() => {
          onPageChange(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        Previous
      </PageButton>
      
      {pageNumbers.map(pageNumber => {
        return (
          <PageButton
            key={pageNumber}
            isDarkMode={isDarkMode}
            isActive={pageNumber === currentPage}
            onClick={() => {
              onPageChange(pageNumber);
            }}
          >
            {pageNumber}
          </PageButton>
        );
      })}
      
      <PageButton 
        isDarkMode={isDarkMode}
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination; 
