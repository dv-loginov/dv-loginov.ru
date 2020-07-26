import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Page from "./containers/Page/Page";

library.add(fab, fas);

const App=()=>(
         <Page />
);

export default App;
