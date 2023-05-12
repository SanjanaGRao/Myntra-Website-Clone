/**
 * @description Order Successful page
 * Once the order is complete, it redirects to this page where an order complete
 * card will be displayed.
 * @author Sanjana Rao
 * @since 16-02-2022
 */
import React from 'react';
import Header from '../../components/orderSuccessComponents/OrderSuccessHeader';
import OrderSuccessCard from '../../components/orderSuccessComponents/OrderSuccessCard';

export default function OrderSuccess() {
  return (
    <>
      <Header />
      <OrderSuccessCard />
    </>
  );
}
