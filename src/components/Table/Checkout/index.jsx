import Image from 'next/image'
import style from './index.module.css'
import { FaRegTrashAlt } from 'react-icons/fa'
import { formatPrice } from '@/utils'

const TableCheckout = ({ itens = [], readOnly = false, OnRemoveItem, onChangeQuantity }) => {
  return (
    <>
      {itens.length > 0 ? (
        <div className={style.tableContainer}>
          <table className={style.table} aria-label="tabela de produtos">
            <thead>
              <tr className={style.tableRow}>
                <th className={style.tableHeader}>Produto</th>
                <th className={style.tableHeader}>Descrição</th>
                <th className={style.tableHeader}>Preço</th>
                <th className={style.tableHeader}>Quantidade</th>
                <th className={style.tableHeader}>Total</th>
                {!readOnly && (
                  <th className={style.tableHeader}></th>
                )}
              </tr>
            </thead>

            <tbody className={style.tbody}>
              {itens.map((item) => (
                <tr className={style.tableRow} key={item.id}>
                  <td className={style.tableData}>
                    <Image
                      className={style.imageProduct}
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
                  </td>
                  <td className={style.tableData}>{item.name}</td>
                  <td className={style.tableData}>{formatPrice(item.price)}</td>
                  <td className={style.tableData}>
                    {!readOnly ? (
                      <div className={style.quantityContainer}>
                        <button
                          className={style.buttonQuantity}
                          onClick={() =>
                            onChangeQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className={style.quantity}>{item.quantity}</span>
                        <button
                          className={style.buttonQuantity}
                          onClick={() =>
                            onChangeQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <span className={style.quantity}>{item.quantity}</span>
                    )}
                  </td>
                  <td className={`${style.tableData} ${style.nowrap}`}>
                    {formatPrice(item.price * item.quantity)}
                  </td>
                  {!readOnly && (
                    <td className={style.tableData}>
                      <button
                        className={style.buttonQuantity}
                        onClick={() => OnRemoveItem(item.id)}
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={style.emptyCartContainer}>
          <span className={style.emptyCart}>Seu carrinho está vazio</span>
        </div>
      )}
    </>
  )
}

export default TableCheckout
