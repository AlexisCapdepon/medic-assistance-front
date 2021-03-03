
function App() {
  return (
    <div className="App h-screen bg-gray-700">
      <header className="bg-gray-600 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">header</header>
      <body className="h-5/6">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <ul className="progressbar">
          <li className="active">login</li>
          <li>choose interest</li>
          <li>add friends</li>
          <li>View map</li>
        </ul>
        </div>
      </body>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
