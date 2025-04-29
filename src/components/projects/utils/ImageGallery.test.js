import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageGallery from './ImageGallery';

describe('ImageGallery', () => {
  const mockImages = ['image1.jpg', 'image2.jpg'];
  const mockHandleClick = jest.fn();

  beforeEach(() => {
    mockHandleClick.mockClear();
  });

  it('renders all images', () => {
    render(
      <ImageGallery
        images={mockImages}
        handleClick={mockHandleClick}
        columns={2}
        imageHeight="h-64"
      />
    );

    const images = screen.getAllByAltText(/^Visual \d+$/);
    expect(images).toHaveLength(2);
  });

  it('calls handleClick when an image container is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ImageGallery
        images={mockImages}
        handleClick={mockHandleClick}
        columns={2}
        imageHeight="h-64"
      />
    );

    // Using getByTestId to target the clickable container
    const firstImageContainer = screen.getByTestId('image-container-0');
    await user.click(firstImageContainer);
    expect(mockHandleClick).toHaveBeenCalledWith(mockImages[0]);
  });

  it('applies correct height class to images', () => {
    const customHeight = 'h-96';
    render(
      <ImageGallery
        images={mockImages}
        handleClick={mockHandleClick}
        columns={2}
        imageHeight={customHeight}
      />
    );

    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveClass(customHeight);
    });
  });
});