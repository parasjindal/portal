import React  from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
    <nav>
      <ul>
        <li><Link to='/'>Add Design</Link></li>
        <li><Link to='/viewdesigns'>View Designs</Link></li>
      </ul>
    </nav>
  </header>
)