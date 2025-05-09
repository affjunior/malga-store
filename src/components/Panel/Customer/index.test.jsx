import { render, screen } from '@testing-library/react'
import PanelCustomer from './index'

describe('PanelCustomer Component', () => {
  const mockData = {
    firstName: 'Antonio',
    lastName: 'Flavio',
    document: {
      type: 'CPF',
      number: '123.456.789-00'
    },
    address: {
      city: 'São Paulo',
      state: 'SP',
      neighborhood: 'Centro',
      street: 'Rua Principal',
      number: '123',
      zipCode: '01234-567'
    }
  }

  it('should render customer information correctly', () => {
    render(<PanelCustomer data={mockData} />)
    
    // Verifica informações pessoais
    expect(screen.getByText('Antonio Flavio')).toBeInTheDocument()
    expect(screen.getByText('CPF')).toBeInTheDocument()
    expect(screen.getByText('123.456.789-00')).toBeInTheDocument()
  })

  it('should render address information correctly', () => {
    render(<PanelCustomer data={mockData} />)
    
    // Verifica informações de endereço
    expect(screen.getByText('São Paulo')).toBeInTheDocument()
    expect(screen.getByText('SP')).toBeInTheDocument()
    expect(screen.getByText('Centro')).toBeInTheDocument()
    expect(screen.getByText('Rua Principal')).toBeInTheDocument()
    expect(screen.getByText('123')).toBeInTheDocument()
    expect(screen.getByText('01234-567')).toBeInTheDocument()
  })

  it('should handle missing data gracefully', () => {
    render(<PanelCustomer data={null} />)
    
    // Verifica se o componente não quebra com dados ausentes
    expect(screen.getByText('Nome:')).toBeInTheDocument()
    expect(screen.getByText('Tipo de documento:')).toBeInTheDocument()
    expect(screen.getByText('Documento:')).toBeInTheDocument()
  })
}) 