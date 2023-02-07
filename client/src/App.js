function App() {

  async function apiTest() {
    const response = await fetch('/api/examples');
    const data = await response.json();

    console.log(data);
  }

  apiTest();

  return (
    <div>
      Hello World
    </div>
  );
}

export default App;
