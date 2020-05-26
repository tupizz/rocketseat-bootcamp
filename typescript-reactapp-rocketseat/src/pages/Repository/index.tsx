import React, { useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoSvg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const [issues, setIssues] = useState([]);
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoSvg} alt="Github explorer" />
        <Link to="/dashboard">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/15824865?s=460&u=dc038f866810c31c8d70f624bd53ca8cb9061d4b&v=4"
            alt="tadeu"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descricao do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        {issues.map((issue) => (
          <Link to="/repositories/ddd" key="">
            <img src="" alt="" />

            <div>
              <strong>asddsfdsaf</strong>
              <p>dsfsadfsfsad</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
        <Link to="/repositories/ddd" key="">
          <img src="" alt="" />

          <div>
            <strong>asddsfdsaf</strong>
            <p>dsfsadfsfsad</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
