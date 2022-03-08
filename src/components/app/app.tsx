import React, { FC } from 'react';
import './app.css';
import TargetListPage from '../target-list-page/target-list-page';
import NotFoundPage from '../not-found-page/not-found-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import TargetDetailsPage from '../target-details-page/target-details-page';

const App:FC = () => (
  <Router>
    <Routes>
      <Route path={AppRoute.Root} element={<TargetListPage />} />
      <Route path={`${AppRoute.Targets}/:id`} element={<TargetDetailsPage />} />
      <Route path={AppRoute.Page404} element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
  );

export default App;
