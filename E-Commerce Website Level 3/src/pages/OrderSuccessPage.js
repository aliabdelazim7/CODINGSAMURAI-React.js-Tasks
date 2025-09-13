import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccessPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="text-green-500 text-8xl mb-6">✓</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your purchase. Your order has been received and will be processed shortly.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">What's Next?</h2>
          <ul className="text-left text-gray-600 space-y-2">
            <li>• You will receive an email confirmation shortly</li>
            <li>• Your order will be prepared and shipped within 1-2 business days</li>
            <li>• You will receive tracking information once your order ships</li>
            <li>• Estimated delivery: 3-5 business days</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors font-medium"
          >
            Continue Shopping
          </Link>
          <Link
            to="/cart"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-300 transition-colors font-medium"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
