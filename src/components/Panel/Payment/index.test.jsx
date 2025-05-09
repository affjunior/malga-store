import { render, screen } from '@testing-library/react'
import PanelPayment from './index'

describe('PanelPayment Component', () => {
  const mockData = {
    type: 'credit',
    card: {
      firstDigits: '4111',
      lastDigits: '1111',
      holderName: 'Antonio Flavio',
      expirationDate: '12/25',
      installments: 1
    }
  }

  const mockAmount = 100
  const mockStatus = 'approved'

  it('should render payment information correctly', () => {
    render(<PanelPayment data={mockData} amount={mockAmount} status={mockStatus} />)
    
    // Verifica informações básicas
    expect(screen.getByText('Método de pagamento:')).toBeInTheDocument()
    expect(screen.getByText('credit')).toBeInTheDocument()
    expect(screen.getByText('R$ 100,00')).toBeInTheDocument()
    expect(screen.getByText('approved')).toBeInTheDocument()
  })

  it('should render card information correctly', () => {
    render(<PanelPayment data={mockData} amount={mockAmount} status={mockStatus} />)
    
    // Verifica informações do cartão
    expect(screen.getByText('4111')).toBeInTheDocument()
    expect(screen.getByText('1111')).toBeInTheDocument()
    expect(screen.getByText('Antonio Flavio')).toBeInTheDocument()
    expect(screen.getByText('12/25')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should handle missing data gracefully', () => {
    render(<PanelPayment data={null} amount={0} status="pending" />)
    
    // Verifica se o componente não quebra com dados ausentes
    expect(screen.getByText('Método de pagamento:')).toBeInTheDocument()
    expect(screen.getByText('R$ 0,00')).toBeInTheDocument()
    expect(screen.getByText('pending')).toBeInTheDocument()
  })
}) 