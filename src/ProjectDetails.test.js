import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

const renderWithRouter = (id) => {
  return render(
    <MemoryRouter initialEntries={[`/projects/${id}`]}>
      <Routes>
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('ProjectDetails', () => {
  it('renders MRI Classification project when id is mri-classification', () => {
    renderWithRouter('mri-classification');
    expect(screen.getByText('AI-Driven MRI Classification System')).toBeInTheDocument();
  });

  it('renders FallAlert project when id is fall-alert', () => {
    renderWithRouter('fall-alert');
    expect(screen.getByText(/FallAlert: AI-Powered Fall Detection/)).toBeInTheDocument();
  });

  it('renders error message for invalid project id', () => {
    renderWithRouter('invalid-id');
    expect(screen.getByText('Project Not Found')).toBeInTheDocument();
  });

  it('renders back to home link', () => {
    renderWithRouter('mri-classification');
    expect(screen.getByText('← Back to Projects')).toBeInTheDocument();
  });
});