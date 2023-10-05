import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import './main.global.css';
import { CardsList } from './shared/CardsList';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import setStore from './store/store';

function AppComponent() {
  const store = setStore();

  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
