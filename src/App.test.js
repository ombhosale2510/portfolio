import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders header with name and title', () => {
    render(<App />);
    expect(screen.getByText('Om Bhosale')).toBeInTheDocument();
    expect(screen.getByText(/Aspiring AI Engineer/)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<App />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    const githubLink = screen.getByRole('link', { name: /github/i });
    
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/om-bhosale-44838b186/');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/ombhosale2510');
  });

  it('renders project cards with learn more links', () => {
    render(<App />);
    const projectLinks = screen.getAllByText(/Learn More/);
    expect(projectLinks.length).toBeGreaterThan(0);
  });

  it('displays current year in footer', () => {
    render(<App />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });
});
