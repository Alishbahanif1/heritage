import DataTable from 'datatables.net-react';  
import DT from 'datatables.net-dt';  
import DisplayTable from './DisplayTable.jsx';
import SingleUser from './SingleUser.jsx';
DataTable.use(DT);

function App() {
  return (
  // <DisplayTable/>
  <>
  <SingleUser/>
  </>
  );
}

export default App;
