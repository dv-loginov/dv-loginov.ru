import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Page from "./pages/Page/Page";

library.add(fab, fas);

class App extends Component {

  render() {
    return (
        <Layout>
         <Page />
        </Layout>
    );
  }
}

export default App;
