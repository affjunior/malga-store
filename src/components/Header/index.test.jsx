import { render, screen } from '@testing-library/react'
import Header from './index'

describe('Header Component', () => {
  it('should render the logo correctly', () => {
    render(<Header />)
    const logo = screen.getByText('Malga Store')
    expect(logo).toBeInTheDocument()
  })

  it('should render navigation links correctly', () => {
    render(<Header />)
    
    const carrinhoLink = screen.getByText('Carrinho')
    const vendasLink = screen.getByText('Vendas')
    
    expect(carrinhoLink).toBeInTheDocument()
    expect(vendasLink).toBeInTheDocument()
    
    expect(carrinhoLink).toHaveAttribute('href', '/')
    expect(vendasLink).toHaveAttribute('href', '/sell')
  })

  it('should have the correct CSS classes', () => {
    render(<Header />)
    
    const header = screen.getByRole('banner')
    const logo = screen.getByText('Malga Store')
    const nav = screen.getByRole('navigation')
    
    expect(header).toHaveClass('header')
    expect(logo).toHaveClass('logo')
    expect(nav).toHaveClass('nav')
  })
}) 