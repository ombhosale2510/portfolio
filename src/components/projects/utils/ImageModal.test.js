import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageModal from './ImageModal';

describe('ImageModal', () => {
  const mockProps = {
    isOpen: true,
    closeModal: jest.fn(),
    selectedImage: 'test-image.jpg'
  };

  beforeEach(() => {
    mockProps.closeModal.mockClear();
  });

  it('renders the image when open', () => {
    render(<ImageModal {...mockProps} />);
    const image = screen.getByAltText('Enlarged view');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  it('closes modal when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<ImageModal {...mockProps} />);
    const closeButton = screen.getByLabelText('Close modal');
    await user.click(closeButton);
    expect(mockProps.closeModal).toHaveBeenCalled();
  });

  it('does not render content when closed', () => {
    render(<ImageModal {...mockProps} isOpen={false} />);
    expect(screen.queryByAltText('Enlarged view')).not.toBeInTheDocument();
  });

  it('maintains accessibility by providing proper labels', () => {
    render(<ImageModal {...mockProps} />);
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
    expect(screen.getByAltText('Enlarged view')).toBeInTheDocument();
  });
});