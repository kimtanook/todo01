import { useState } from 'react';
import Form from '../components/form/Form';
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';
import List from '../components/list/List';
import '../css/style.css';

import '../css/style.css';

function TodoList() {
  const [toDos, setToDos] = useState([]);
  return (
    <Layout>
      <Header />
      <Form setToDos={setToDos} />
      <List toDos={toDos} setToDos={setToDos} />
    </Layout>
  );
}

export default TodoList;
