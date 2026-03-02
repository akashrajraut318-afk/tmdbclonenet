import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-center p-10">
    <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
    <p className="mt-4">
      Go back to <Link to="/" className="text-blue-500">home</Link>.
    </p>
  </div>
);

export default NotFoundPage;
