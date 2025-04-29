import { renderHook, act } from '@testing-library/react-hooks';
import { useImageModal } from './useImageModal';

describe('useImageModal', () => {
  it('initializes with correct default values', () => {
    const { result } = renderHook(() => useImageModal());
    expect(result.current.selectedImage).toBeNull();
    expect(result.current.isModalOpen).toBe(false);
  });

  it('updates state when handleImageClick is called', () => {
    const { result } = renderHook(() => useImageModal());
    const testImage = 'test-image.jpg';

    act(() => {
      result.current.handleImageClick(testImage);
    });

    expect(result.current.selectedImage).toBe(testImage);
    expect(result.current.isModalOpen).toBe(true);
  });

  it('resets state when closeModal is called', () => {
    const { result } = renderHook(() => useImageModal());

    // First open the modal
    act(() => {
      result.current.handleImageClick('test-image.jpg');
    });

    // Then close it
    act(() => {
      result.current.closeModal();
    });

    expect(result.current.selectedImage).toBeNull();
    expect(result.current.isModalOpen).toBe(false);
  });
});